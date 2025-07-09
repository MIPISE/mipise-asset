import React, {ReactElement} from "react";
import { Colors, Size, Direction } from "../types";
import { ItemDropdown } from "./ItemDropdown";


export type AbstractDropdown = {
  title: ReactElement[] | string,
  children: ReactElement<ItemDropdown>[]
  color?: Colors,
  size?: Size,
  direction?: Direction,
  fullW?: boolean,
  hover?: boolean
}

const AbstractDropdown: React.FC<AbstractDropdown>
  = ({ title, children, color = Colors.LIGHT, size = Size.MEDIUM, direction = Direction.END, fullW = true, hover = false, ...props }) => {

    return (
      <div
        className={`drop${direction} ${fullW ? `d-grid` : ""} ${hover ? "drophover" : ""}`}>
        <button
          className={`btn btn-${color} ${size ? `btn-${size}` : ""} ${fullW ? `d-flex flex-start justify-content-between align-items-center` : ""}  dropdown-toggle dropdown-responsive`} {...props}
          type='button' data-bs-toggle='dropdown' aria-expanded='false' aria-controls=''
          aria-label='' value=''>
          {title}
        </button>
        <ul
          className="dropdown-menu">
          {children}
        </ul>
      </div>
    );
  };

export default AbstractDropdown;
