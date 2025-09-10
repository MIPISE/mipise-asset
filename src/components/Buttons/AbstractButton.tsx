import React, { Fragment } from "react";
import { Color, GlobalProps, Size } from "../types";
import confirmation from "../handlers/confirmation";

type DesignAbstractButtonProps = GlobalProps & {
  color: Color
  size?: Size
  rounded?: string
  square?: boolean
  fullwidth?: boolean
  variant?: "link" | "subtle"
}

export type AbstractButtonProps = DesignAbstractButtonProps & {
  hyperlink?: boolean
  type?: "submit" | "reset" | "button"
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

  if (props.fullwidth)
    className.push("w-100");

  return className.join(" ");
}

const AbstractButton: React.FC<AbstractButtonProps> = ({
  color,
  size,
  hyperlink,
  variant,
  rounded,
  square,
  type,
  fullwidth,
  confirmText,
  classes = "",
  children,
  ...props
}) => {
  const className = createButtonClassName({classes, color, variant, size, square, rounded, fullwidth});

  return (
    <Fragment>
      {hyperlink
        ? <a className={className}
            onClick={(event) => {
              if (confirmText)
                confirmation(event, confirmText);
            }}
            {...props}>{children}</a>
        : <button className={className} type={type}
            onClick={(event) => {
              if (confirmText)
                confirmation(event, confirmText);
            }}
            {...props}>{children}</button>}
    </Fragment>
  );
};

export default AbstractButton;
