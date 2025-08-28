// React Helper
import React from "react";
import {createRoot} from "react-dom/client";
import {flushSync} from "react-dom";

const voidElements = ["img", "hr", "input", "br"];

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
                if (propName !== "value")
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

        if (voidElements.includes(element.tagName.toLowerCase()))
            return React.createElement(element.tagName.toLowerCase(), { ...props, key: `${pathKey}_${element.tagName}_${index}}`});

        return React.createElement(element.tagName.toLowerCase(), { ...props, key: `${pathKey}_${element.tagName}_${index}}`}, children);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const time = Date.now();

    const components = document.querySelectorAll("div[data-component]");
    const toBeRender = [];
    components.forEach((component, i) => {
        let parent = component.parentElement;
        let componentHasComponentParent = false;
        while (parent != null) {
            if (parent.getAttributeNames().includes("data-component")) {
                componentHasComponentParent = true;
                break;
            }

            parent = parent.parentElement;
        }

        if (!componentHasComponentParent) {
            const key = component.getAttribute("data-name");
            const rendered = renderElement(component, i, `${key}_${i}`);

            toBeRender.push([createRoot(component), rendered]);
        }
    });

    flushSync(() => {
        for (const component of toBeRender)
            component[0].render(component[1])
    });

    if (process.env.NODE_ENV === "development") {
        console.debug(`React rendering time: ${Date.now() - time}ms`);
    }

    document.dispatchEvent(new Event("ReactComponentHydrated"));
});
