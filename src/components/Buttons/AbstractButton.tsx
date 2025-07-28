import React, {Fragment, ReactElement} from "react";
import {Colors, GlobalProps, Size} from "../types";

export type AbstractButtonProps = GlobalProps & {
  children: ReactElement[] | string
  color: Colors
  size: Size
  hyperlink?: boolean
  rounded?: number
  variant?: "link" | "subtle"
}

const AbstractButton: React.FC<AbstractButtonProps>
  = ({ color, size, hyperlink = false, variant, rounded, children, ...props }) => {
    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    const classes = `btn btn-${color}${(variant ? `-${variant}` : "")}${size ? ` btn-${size}` : ""}${rounded ? ` rounded-${rounded}` : ""} ${props.classes}`;
    return (
      <Fragment>
        {hyperlink
          ? <a className={classes} {...props}>{content}</a>
          : <button className={classes} {...props}>{content}</button>}
      </Fragment>
    );
  };

export default AbstractButton;
