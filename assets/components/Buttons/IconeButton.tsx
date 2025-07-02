import React, { ReactElement } from "react";
import { Colors, Size } from "../types";
import { Icones } from "../icones";

export type IconeButtonProps = {
  children: ReactElement[] | string,
  color: Colors,
  size: Size,
  icone: Icones,
  variant?: "link" | "subtle",
  iconeRight?: boolean

}

const IconeButton: React.FC<IconeButtonProps>
  = ({ color, size, variant, children, icone, iconeRight, ...props }) => {

    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return (
      <button
        className={`btn btn-${color}${(variant ? `-${variant}` : "")} ${size ? `btn-${size}` : ""} d-inline-flex align-items-center justify-content-center `}{...props}>
        <i
          className={`fi fi-rs-${icone} ${(iconeRight ? "ps-2 order-2" : null)}  pe-2`} aria-hidden="true">
        </i>
        <span
          className="" {...props}>
          {content}
        </span>
      </button>
    );
  };

export default IconeButton;
