import React, { ReactElement } from "react";
import { Colors, Size } from "../types";
import { Icones } from "../icones";

export type IconeButtonProps = {
  children?: ReactElement[] | string,
  color: Colors,
  size: Size,
  icone: Icones,
  variant?: "link" | "subtle",
  iconeEnd: boolean,
  square?: boolean,
  className?: string

}

const IconeButton: React.FC<IconeButtonProps>
  = ({ color, size, variant, children, icone, iconeEnd, square, className, ...props }) => {

    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return (
      <button
        className={`btn btn-${color}${(variant ? `-${variant}` : "")} ${size ? `btn-${size}` : ""} ${square ? `btn-square` : "d-inline-flex align-items-center justify-content-center"} ${className} `}{...props}>
        <i
          className={`fi fi-rs-${icone} ${(iconeEnd ? `fi fi-rs-${icone} ${square ? `` : "ps-2"} order-2` : `fi fi-rs-${icone} pe-2`)}`} aria-hidden="true">
        </i>
        <span
          className="" {...props}>
          {content}
        </span>
      </button>
    );
  };

export default IconeButton;
