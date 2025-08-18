import React from "react";
import { Icons } from "../icons";
import {AbstractButtonProps} from "./AbstractButton";
import Icon from "../Icon";

export type IconButtonProps = AbstractButtonProps & {
  icon: Icons
  iconEnd: boolean
  buttonType?: "submit" | "reset" | "button"
  iconType?: "rs" | "ss"
  square?: boolean
  visuallyHidden?: boolean
}

const IconButton: React.FC<IconButtonProps>
  = ({ color, size, variant, children, icon, iconType = "rs", iconEnd, square, rounded, visuallyHidden, buttonType = "submit", classes = "", ...props }) => {
    return (
      <button
        className={`btn btn-${color}${(variant ? `-${variant}` : "")} ${size ? `btn-${size}` : ""} ${square ? `btn-square` : "d-inline-flex align-items-center justify-content-center"}${rounded ? ` rounded-${rounded}` : ""} ${classes} `}{...props}
        type={buttonType}
      >
        <Icon icon={icon} type={iconType} classes={`${iconEnd ? `${square ? "" : "ps-2"} order-2` : "pe-2"}`}/>
        <span
          className={visuallyHidden ? "visually-hidden" : null}>
          {children}
        </span>
      </button>
    );
  };

export default IconButton;
