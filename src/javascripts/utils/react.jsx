// React Helper
import React from "react";
import ReactDOM from "react-dom/client";

const roots = [];

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
    const components = document.querySelectorAll("div[data-component]");
    components.forEach((component, i) => {
        const key = component.getAttribute("data-name");
        const renderedComponent = renderComponent(component, i, key);

        if (!roots.includes(component.parentElement))
            roots.push({element: component.parentElement, root: ReactDOM.createRoot(component.parentElement)});
        roots.find((root) => root.element === component.parentElement).render(renderedComponent);

        component.remove();
    })
});
