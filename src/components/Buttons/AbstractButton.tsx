import React, { ReactElement } from "react";
import { Colors, Size } from "../types";

export type AbstractButtonProps = {
    children: ReactElement[] | string,
    color: Colors,
    size: Size,
    variant?: "link" | "subtle"

}

const AbstractButton: React.FC<AbstractButtonProps>
    = ({ color, size, variant, children, ...props }) => {

        let content;
        if (Array.isArray(children) || React.isValidElement(children)) {
            content = children;
        } else {
            content = <span dangerouslySetInnerHTML={{ __html: children }} />;
        }

        return (
            <button
                className={`btn btn-${color}${(variant ? `-${variant}` : "")} ${size ? `btn-${size}` : ""}`} {...props}>
                <span
                    className="" {...props}>
                    {content}
                </span>
            </button>
        );
    };

export default AbstractButton;
