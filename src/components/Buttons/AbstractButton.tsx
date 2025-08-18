import React, {Fragment} from "react";
import {Color, GlobalProps, Size} from "../types";

export type AbstractButtonProps = GlobalProps & {
  color: Color
  size?: Size
  hyperlink?: boolean
  rounded?: string
  square?: boolean
  variant?: "link" | "subtle"
  type?: "submit" | "reset" | "button"
}

const AbstractButton: React.FC<AbstractButtonProps>
  = ({ color, size, hyperlink = false, variant, rounded, square = false, type, classes = "", children, ...props }) => {
    const completeClasses = `btn btn-${color}${(variant ? `-${variant}` : "")}${size ? ` btn-${size}` : ""}${square ? " btn-square" : ""}${rounded ? ` rounded-${rounded}` : ""} ${classes}`;
    return (
      <Fragment>
        {hyperlink
          ? <a className={completeClasses} {...props}>{children}</a>
          : <button className={completeClasses} type={type} {...props}>{children}</button>}
      </Fragment>
    );
  };

export default AbstractButton;
