// React Helper
import React from "react";
import { createRoot } from "react-dom/client";

/**
 * @param element Element
 * @param index number
 * @param pathKey string
 */
const renderElement = (element, index, pathKey) => {
    if (element.nodeType === Node.COMMENT_NODE)
        return "";

    if (element.nodeType === Node.TEXT_NODE)
        return element.textContent;

    const attributes = Array.from(element.attributes);
    const children = Array.from(element.childNodes).map((child, i) => {
        return renderElement(child, i, `${pathKey}_${i}`)
    });

    const props = {};
    if (element.hasAttribute("data-component")) {
        let componentName = attributes.find(a => a.name === "data-name");
        if (!componentName) {
            console.warn("Component usage without data-name value in : " + element);
            return;
        }
        componentName = componentName.value;

        // React component
        attributes.forEach(attr => {
            let propName = attr.name.replace("data-", "");
            if (["component", "name"].includes(propName))
                return;

            let prop = attr.value;
            if (prop === "")
                prop = true;

            if (!propName.startsWith("aria-") && !propName.includes("bs-")) {
                propName = propName.replace(/-(\w)/g, (str, p1) => {
                    return p1.toUpperCase();
                });
            }

            try {
                props[propName] = JSON.parse(prop);
            } catch (e) {
                props[propName] = prop;
            }
        });
        props["children"] = children;

        const ComponentFunction = require(`../../components/${componentName}.tsx`).default;
        return (
            <ComponentFunction {...props} key={pathKey}/>
        );
    } else {
        // DOM element
        attributes.forEach(attr => {
            if (attr.name === "class")
                return;

            let prop = attr.value;
            if (prop === "")
                prop = true;

            props[attr.name] = prop;
        });

        if (element.className)
            props.className = element.className;

        if (element.tagName.toLowerCase() === "img")
            return React.createElement(element.tagName.toLowerCase(), { ...props, key: `${pathKey}_${element.tagName}_${index}}`});

        return React.createElement(element.tagName.toLowerCase(), { ...props, key: `${pathKey}_${element.tagName}_${index}}`}, children);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const components = document.querySelectorAll("div[data-component]");
    components.forEach((component, i) => {
        const key = component.getAttribute("data-name");
        const rendered = renderElement(component, i, `${key}_${i}`);

        component.innerHTML = "";
        const root = createRoot(component);
        root.render(rendered);
    });

    setTimeout(() => document.dispatchEvent(new Event("ReactComponentHydrated")), components.length * 10);
});
