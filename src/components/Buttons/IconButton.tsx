import React from "react";
import { Icons } from "../icons";
import { AbstractButtonProps, createButtonClassName } from "./AbstractButton";
import Icon from "../Icon";
import confirmation from "../handlers/confirmation";

export type IconButtonProps = AbstractButtonProps & {
  icon: Icons
  iconEnd?: boolean
  buttonType?: "submit" | "reset" | "button"
  iconType?: "rs" | "ss"
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
    <a
      className={createButtonClassName({ classes, color, variant, size, square, rounded, fullwidth })}
      type={buttonType}
      onClick={(event) => {
        if (confirmText)
          confirmation(event, confirmText);
      }}
      {...props}
    >
      <Icon icon={icon} type={iconType} classes={`${iconEnd ? `${square ? "" : "ps-2"} order-2` : "pe-2"}`} />
      <span
        className={visuallyHidden ? "visually-hidden" : 'small'}>
        {children}
      </span>
    </a>
  );
};

export default IconButton;
