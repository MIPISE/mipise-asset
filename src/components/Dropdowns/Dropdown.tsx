import React, {ReactElement} from "react";
import {Color, Size, Direction, GlobalProps} from "../types";
import { ItemDropdownProps } from "./ItemDropdown";
import {Icons} from "../icons";
import Icon from "../Icon";
import DropdownMenu from "./DropdownMenu";

export type DropdownProps = GlobalProps & {
  title: ReactElement[] | string
  children: ReactElement<ItemDropdownProps>[]
  titleIcon?: Icons,
  inNav?: boolean
  color?: Color
  size?: Size
  square?: boolean
  direction?: Direction
  fullWidth?: boolean
  hover?: boolean
}

const Dropdown: React.FC<DropdownProps>
  = ({ title, children, titleIcon,
       inNav, color = Color.LIGHT,
       size = Size.MEDIUM, square = false, direction = Direction.END,
       hover, fullWidth = true, classes = "", ...props }) => {

    const btnClasses = inNav ? "nav-link" : `btn btn-${color}${size ? ` btn-${size}` : ""}${square ? " btn-square" : ""}${fullWidth ? " d-flex flex-start justify-content-between align-items-center" : ""}  dropdown-toggle dropdown-responsive`
    return (
      <div
        className={`drop${direction}${fullWidth ? ` d-grid` : ""}${hover ? " drophover" : ""} ${classes}`}>
        <button
          className={btnClasses} {...props}
          type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-controls=""
          aria-label="" value="">
          {titleIcon != null ?
            <>
              <Icon icon={titleIcon}/>
              <span>{title}</span>
            </> : title}
        </button>
        <DropdownMenu>
          {children}
        </DropdownMenu>
      </div>
    );
  };

export default Dropdown;
