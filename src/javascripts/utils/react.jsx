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
    const topLevelComponents = [];
    const allComponents = document.querySelectorAll("div[data-component]");

    allComponents.forEach(component => {
        let isTopLevel = true;
        let parent = component.parentElement;
        while (parent && parent !== document.body && parent.nodeType === 1) {
            if (parent.hasAttribute('data-component')) {
                isTopLevel = false;
                break;
            }
            parent = parent.parentElement;
        }
        if (isTopLevel) {
            topLevelComponents.push(component);
        }
    });

    topLevelComponents.forEach((component, i) => {
        const key = component.getAttribute("data-name");
        const renderedComponent = renderComponent(component, i, key);

        const root = ReactDOM.createRoot(component);
        root.render(renderedComponent);
    });
});
