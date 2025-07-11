import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";
import { Icons } from "../icons";
import {AbstractButtonProps} from "./AbstractButton";
import Icon from "../Icon";

export type IconButtonProps = AbstractButtonProps & {
  icon: Icons
  iconEnd: boolean
  square?: boolean
}

const IconButton: React.FC<IconButtonProps>
  = ({ color, size, variant, children, icon, iconEnd, square, rounded, ...props }) => {

    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return (
      <button
        className={`btn btn-${color}${(variant ? `-${variant}` : "")} ${size ? `btn-${size}` : ""} ${square ? `btn-square` : "d-inline-flex align-items-center justify-content-center"}${rounded ? ` rounded-${rounded}` : ""} ${props.classes} `}{...props}>
        <Icon icon={icon} classes={`${iconEnd ? `${square ? "" : "ps-2"} order-2` : "pe-2"}`}/>
        <span
          className="" {...props}>
          {content}
        </span>
      </button>
    );
  };

export default IconButton;
