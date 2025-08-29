import React from "react";
import { Icons } from "../icons";
import { AbstractButtonProps } from "./AbstractButton";
import Icon from "../Icon";
import confirmation from "../handlers/confirmation";

export type IconButtonProps = AbstractButtonProps & {
  icon: Icons
  iconEnd?: boolean
  buttonType?: "submit" | "reset" | "button"
  iconType?: "rs" | "ss"
  square?: boolean
  visuallyHidden?: boolean
  confirmText?: string
}

const IconButton: React.FC<IconButtonProps> = ({
  color,
  size,
  variant,
  children,
  icon,
  iconType = "rs",
  iconEnd,
  square,
  rounded,
  visuallyHidden,
  fullwidth,
  buttonType = "submit",
  confirmText,
  classes = "",
  ...props
}) => {
    return (
      <button
        className={`btn btn-${color}${(variant ? `-${variant}` : "")} ${size ? `btn-${size}` : ""} ${square ? `btn-square` : "d-inline-flex align-items-center justify-content-center"}${rounded ? ` rounded-${rounded}` : ""} ${fullwidth ? `w-100` : ""} ${classes} `}
        type={buttonType}
        onClick={(event) => {
          if (confirmText)
            confirmation(event, confirmText);
        }}
        {...props}
      >
        <Icon icon={icon} type={iconType} classes={`${iconEnd ? `${square ? "" : "ps-2"} order-2` : "pe-2"}`} />
        <span
          className={visuallyHidden ? "visually-hidden" : null}>
          {children}
        </span>
      </button>
    );
  };

export default IconButton;
