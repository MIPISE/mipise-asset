import React, { Fragment } from "react";
import { Color, GlobalProps, Size } from "../types";
import confirmation from "../handlers/confirmation";

export type AbstractButtonProps = GlobalProps & {
  color: Color
  size?: Size
  hyperlink?: boolean
  rounded?: string
  square?: boolean
  fullwidth?: boolean
  variant?: "link" | "subtle"
  type?: "submit" | "reset" | "button"
  confirmText?: string
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
    const completeClasses = `btn btn-${color}${(variant ? `-${variant}` : "")}${size ? ` btn-${size}` : ""}${square ? " btn-square" : ""}${rounded ? ` rounded-${rounded}` : ""}${fullwidth ? " w-100" : ""} ${classes}`;
    return (
      <Fragment>
        {hyperlink
          ? <a className={completeClasses}
              onClick={(event) => {
                if (confirmText)
                  confirmation(event, confirmText);
              }}
              {...props}>{children}</a>
          : <button className={completeClasses} type={type}
              onClick={(event) => {
                if (confirmText)
                  confirmation(event, confirmText);
              }}
              {...props}>{children}</button>}
      </Fragment>
    );
  };

export default AbstractButton;
