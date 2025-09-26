import React from "react";
import { Color, GlobalProps, Size } from "../types";

export type AbstractBadgeProps = GlobalProps & {
    color: Color,
    size: Size,
    variant?: string,
    rounded?: string,
}

const AbstractBadge: React.FC<AbstractBadgeProps>
    = ({ color, size, variant, children, rounded, classes = "", ...props }) => {
        return (
            <span className={`badge badge-${color}${size ? ` badge-${size}` : ""}${variant ? ` badge-${variant}` : ""}${rounded ? ` badge-${rounded}` : ""} ${classes}`} {...props}>
                {children}
            </span>
        );
    };

export default AbstractBadge;
