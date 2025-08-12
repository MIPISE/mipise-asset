import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";

export type AbstractBadgeProps = GlobalProps & {
    color: Colors,
    size: Size,
    variant?: string,
    rounded?: string,
}

const AbstractBadge: React.FC<AbstractBadgeProps>
    = ({ color, size, variant, children, rounded, classes = "", ...props }) => {
        return (
            <span className={`badge badge-${color}${size ? ` badge-${size}` : ""}${variant ? ` badge-${variant}` : ""}${rounded ? ` ${rounded}` : ""} ${classes}`} {...props}>
                {children}
            </span>
        );
    };

export default AbstractBadge;
