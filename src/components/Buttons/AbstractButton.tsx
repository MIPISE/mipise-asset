import React, { Fragment } from "react";
import { Color, GlobalProps, Size } from "../types";
import confirmation from "../handlers/confirmation";

type DesignAbstractButtonProps = GlobalProps & {
  color: Color
  size?: Size
  rounded?: string
  square?: boolean
  fullWidth?: boolean
  variant?: "link" | "subtle"
}

export type AbstractButtonProps = DesignAbstractButtonProps & {
  type?: "submit" | "button"
  confirmText?: string
}

export const createButtonClassName = (props: DesignAbstractButtonProps) => {
  const className = ["btn", props.classes];

  let colorClass = `btn-${props.color}`;
  if (props.variant)
    colorClass += `-${props.variant}`;
  className.push(colorClass);

  if (props.size)
    className.push(`btn-${props.size}`);

  if (props.square)
    className.push("btn-square")
  else
    className.push("d-inline-flex align-items-center justify-content-center")

  if (props.rounded != undefined)
    className.push(`rounded-${props.rounded}`)

  if (props.fullWidth)
    className.push("w-100");

  return className.join(" ");
}

const AbstractButton: React.FC<AbstractButtonProps> = ({
  color,
  size,
  variant,
  rounded,
  square,
  type,
  fullWidth,
  confirmText,
  classes = "",
  children,
  ...props
}) => {
  const className = createButtonClassName({ classes, color, variant, size, square, rounded, fullWidth });
  const isButton = ["button", "submit"].includes(type);

  return (
    <>
      {isButton
        ? <button className={className} type={type}
          onClick={(event) => {
            if (confirmText)
              confirmation(event, confirmText);
          }}
          {...props}>{children}</button>
        : <a className={className} type={type}
          onClick={(event) => {
            if (confirmText)
              confirmation(event, confirmText);
          }}
          {...props}>{children}</a>}
    </>
  );
};

export default AbstractButton;
