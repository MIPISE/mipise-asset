import React, { Fragment } from "react";
import { Color, GlobalProps, Size } from "../types";

export type AbstractButtonProps = GlobalProps & {
  color: Color
  size?: Size
  hyperlink?: boolean
  rounded?: string
  square?: boolean
  fullwidth?: boolean
  variant?: "link" | "subtle"
  type?: "submit" | "reset" | "button"
}

const AbstractButton: React.FC<AbstractButtonProps>
  = ({ color, size, hyperlink, variant, rounded, square, type, fullwidth, classes = "", children, ...props }) => {
    const completeClasses = `btn btn-${color}${(variant ? `-${variant}` : "")}${size ? ` btn-${size}` : ""}${square ? " btn-square" : ""}${rounded ? ` rounded-${rounded}` : ""}${fullwidth ? " w-100" : ""} ${classes}`;
    return (
      <Fragment>
        {hyperlink
          ? <a className={completeClasses} {...props}>{children}</a>
          : <button className={completeClasses} type={type} {...props}>{children}</button>}
      </Fragment>
    );
  };

export default AbstractButton;
