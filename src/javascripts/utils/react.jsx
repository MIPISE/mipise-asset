// React Helper
import React from "react";
import { renderToString } from "react-dom/server";

const renderComponent = (component, index, pathKey) => {
    const props = {};
    component.getAttributeNames().forEach((name) => {
        if (name === "data-component")
            return;

        let prop = component.getAttribute(name);
        if (prop === "")
            prop = true;

        props[name.replace("data-", "")] = prop;
    });

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
        const htmlString = renderToString(renderedComponent);

        const previousElement = component.previousElementSibling;
        if (previousElement) {
            previousElement.insertAdjacentHTML("afterend", htmlString);
        } else {
            component.parentElement.insertAdjacentHTML("beforeend", htmlString);
        }

        component.remove();
    });
});
