// React Helper
import React from "react";
import ReactDOM from "react-dom/client";

const renderComponent = (component, index, pathKey) => {
    const props = {};
    component.getAttributeNames().forEach((name) => props[name.replace("data-", "")] = component.getAttribute(name));

    const componentName = props["name"];
    const currentKey = `${pathKey}_${componentName}_${index}`;

    const childrenComponent = Array.from(component.querySelectorAll(":scope > div[data-component]"));
    const children = [];
    if (childrenComponent.length !== 0) {
        for (const i in childrenComponent) {
            children.push(renderComponent(childrenComponent[i], i, currentKey));
        }
    }
    props["children"] = children.length > 0 ? children : component.innerHTML;

    const ComponentFunction = require(`../../components/${componentName}.tsx`).default;
    return (
        <ComponentFunction {...props} key={currentKey}/>
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const parentMap = new Map();
    const components = document.querySelectorAll("div[data-component]");
    components.forEach((component) => {
        const parentElement = component.parentElement;
        if (!parentMap.has(parentElement)) {
            parentMap.set(parentElement, []);
        }
        parentMap.get(parentElement).push(component);
    });

    parentMap.forEach((componentsInParent, parentElement) => {
        const renderedComponents = [];
        componentsInParent.forEach((component, i) => {
            const key = component.getAttribute("data-name");
            renderedComponents.push(renderComponent(component, i, key));
        });

        ReactDOM.createRoot(parentElement).render(<>{renderedComponents}</>);
        componentsInParent.forEach(component => component.remove());
    });
});
