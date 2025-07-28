import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";

export type AbstractBadgeProps = GlobalProps & {
    children: ReactElement[] | string,
    color: Colors,
    size: Size,
    variant?: string,
    rounded?: string,
}

const AbstractBadge: React.FC<AbstractBadgeProps>
    = ({ color, size, variant, children, rounded, ...props }) => {

        let content;
        if (Array.isArray(children) || React.isValidElement(children)) {
            content = children;
        } else {
            content = <span dangerouslySetInnerHTML={{ __html: children }} />;
        }

        return (
            <span className={`badge badge-${color}${size ? ` badge-${size}` : ""}${variant ? ` badge-${variant}` : ""}${rounded ? ` ${rounded}` : ""} ${props.classes || ""}`} {...props}>
                {content}
            </span>
        );
    };

export default AbstractBadge;
