import React from "react";
import { Color, Size } from "../types";
import {AbstractBadgeProps} from "./AbstractBadge";

export type ClipboardBadgeProps = AbstractBadgeProps & {
    sizeClipboard?: Size
    colorClipboard?: Color
}

const ClipboardBadge: React.FC<ClipboardBadgeProps> = ({
  color,
  size,
  variant,
  children,
  rounded,
  sizeClipboard = Size.EXTRASMALL,
  colorClipboard,
  classes = "",
  ...props
}) => {
  const text = typeof children == "string" ? children : "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
  }

  return (
    <div className={`badge badge-${color}${size ? ` badge-${size}` : ""}${variant ? ` badge-${variant}` : ""}${rounded ? ` badge-${rounded}` : ""} ${classes}`} {...props}>
      <span className={`textToCopy`}>
        {children}
      </span>
      <button className={`copyButton btn btn-${colorClipboard} btn-${sizeClipboard} btn-square ms-1`} onClick={handleCopy}>
        <i className="fi fi-rs-copy"></i>
      </button>
    </div>
  );
};

export default ClipboardBadge;
