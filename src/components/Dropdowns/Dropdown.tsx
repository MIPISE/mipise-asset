import React, {ReactElement} from "react";
import {Colors, Size, Direction, GlobalProps} from "../types";
import { ItemDropdownProps } from "./ItemDropdown";
import {Icons} from "../icons";
import Icon from "../Icon";

export type DropdownProps = GlobalProps & {
  title: ReactElement[] | string
  children: ReactElement<ItemDropdownProps>[]
  titleIcon?: Icons,
  inNav?: boolean
  color?: Colors
  size?: Size
  direction?: Direction
  fullWidth?: boolean
  hover?: boolean
}

const Dropdown: React.FC<DropdownProps>
  = ({ title, children, titleIcon,
       inNav, color = Colors.LIGHT,
       size = Size.MEDIUM, direction = Direction.END,
       hover, fullWidth = true, ...props }) => {

    const btnClasses = inNav ? "nav-link" : `btn btn-${color}${size ? ` btn-${size}` : ""}${fullWidth ? " d-flex flex-start justify-content-between align-items-center" : ""}  dropdown-toggle dropdown-responsive`
    return (
      <div
        className={`drop${direction}${fullWidth ? ` d-grid` : ""}${hover ? " drophover" : ""} ${props.classes}`}>
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
        <ul
          className="dropdown-menu">
          {children}
        </ul>
      </div>
    );
  };

export default Dropdown;
