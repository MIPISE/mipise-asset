import React, { ReactElement } from "react";
import { Colors, Size } from "../types";

export type AbstractBadgesProps = {
    children: ReactElement[] | string,
    color: Colors,
    size: Size,
    variant?: "circle",
    rounded?: "rounded",
}

const AbstractBadges: React.FC<AbstractBadgesProps>
    = ({ color, size, variant, children, rounded, ...props }) => {

        let content;
        if (Array.isArray(children) || React.isValidElement(children)) {
            content = children;
        } else {
            content = <span dangerouslySetInnerHTML={{ __html: children }} />;
        }

        return (
            <span className={`badge badge-${color} ${size ? `badge-${size}` : ""} ${variant ? `badge-${variant}` : ""} ${rounded ? `${rounded}` : ""}`} {...props}>
                {content}
            </span>
        );
    };

export default AbstractBadges;
