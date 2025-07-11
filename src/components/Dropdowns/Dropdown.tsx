import React, {ReactElement} from "react";
import {Colors, Size, Direction, GlobalProps} from "../types";
import { ItemDropdownProps } from "./ItemDropdown";
import {Icons} from "../icons";
import Icon from "../Icon";

export type DropdownProps = GlobalProps & {
  title: ReactElement[] | string
  children: ReactElement<ItemDropdownProps>[]
  "title-icon"?: Icons,
  "in-nav"?: boolean
  color?: Colors
  size?: Size
  direction?: Direction
  "full-w"?: boolean
  hover?: boolean
}

const Dropdown: React.FC<DropdownProps>
  = ({ title, children, color = Colors.LIGHT, size = Size.MEDIUM, direction = Direction.END, hover = false, ...props }) => {
    const titleIcon = props["title-icon"] || null;
    const inNav = props["in-nav"];
    const fullW = props["full-w"] || true;

    const btnClasses = inNav ? "nav-link" : `btn btn-${color}${size ? ` btn-${size}` : ""}${fullW ? " d-flex flex-start justify-content-between align-items-center" : ""}  dropdown-toggle dropdown-responsive`
    return (
      <div
        className={`drop${direction}${fullW ? ` d-grid` : ""}${hover ? " drophover" : ""} ${props.classes}`}>
        <button
          className={btnClasses} {...props}
          type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-controls=""
          aria-label="" value="">
          {titleIcon != null ?
            <>
              <Icon name={titleIcon}/>
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
