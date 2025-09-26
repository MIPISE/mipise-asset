import React from "react";
import { Color, GlobalProps, Size } from "../types";

export type ClipboardBadgeProps = GlobalProps & {
    color: Color,
    size: Size,
    sizeClipboard?: Size,
    colorClipboard?: Color,
    variant?: string,
    rounded?: string,
}

const ClipboardBadge: React.FC<ClipboardBadgeProps>
    = ({ color, size, variant, children, rounded, sizeClipboard = Size.EXTRASMALL, colorClipboard, classes = "", ...props }) => {
        return (
            <div className={`badge badge-${color}${size ? ` badge-${size}` : ""}${variant ? ` badge-${variant}` : ""}${rounded ? ` badge-${rounded}` : ""} ${classes}`} {...props}>
                <span className={`textToCopy`}>
                    {children}
                </span>
                <button className={`copyButton btn btn-${colorClipboard} btn-${sizeClipboard} btn-square ms-1`}>
                    <i className="fi fi-rs-copy"></i>
                </button>
            </div>
        );
    };

export default ClipboardBadge;
