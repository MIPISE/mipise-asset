import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";

export type AbstractButtonProps = GlobalProps & {
    children: ReactElement[] | string
    color: Colors
    size: Size
    rounded?: number
    variant?: "link" | "subtle"
}

const AbstractButton: React.FC<AbstractButtonProps>
    = ({ color, size, variant, rounded, children, ...props }) => {

        let content;
        if (Array.isArray(children) || React.isValidElement(children)) {
            content = children;
        } else {
            content = <span dangerouslySetInnerHTML={{ __html: children }} />;
        }

        return (
            <button
                className={`btn btn-${color}${(variant ? `-${variant}` : "")}${size ? ` btn-${size}` : ""}${rounded ? ` rounded-${rounded}` : ""} ${props.classes}`} {...props}>
                <span
                    className="" {...props}>
                    {content}
                </span>
            </button>
        );
    };

export default AbstractButton;
