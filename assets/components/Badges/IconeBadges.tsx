import React, { ReactElement } from "react";
import { Colors, Size } from "../types";
import { Icones } from "../icones";

export type IconeBadgesProps = {
    children: ReactElement[] | string,
    color: Colors,
    size: Size,
    icone: Icones,
    variant?: "circle",
    rounded?: "rounded",
}

const IconeBadges: React.FC<IconeBadgesProps>
    = ({ color, size, variant, children, rounded, icone, ...props }) => {

        let content;
        if (Array.isArray(children) || React.isValidElement(children)) {
            content = children;
        } else {
            content = <span dangerouslySetInnerHTML={{ __html: children }} />;
        }

        return (
            <div className={`badge badge-${color} ${size ? `badge-${size}` : ""} ${rounded ? `${rounded}` : ""}`}>
                <i className={`fi fi-rs-${icone} pe-1`} aria-hidden="true"></i>
                <span className="d-sm-flex d-none pe-1" {...props}>
                    {content}
                </span>
            </div>
        );
    };

export default IconeBadges;
