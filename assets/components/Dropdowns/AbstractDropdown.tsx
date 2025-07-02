import React, { ReactElement } from "react";
import { Colors, Size, Direction } from "../types";
import ItemDropdown from "../Dropdowns/ItemDropdown";


export type AbstractDropdown = {
  title: ReactElement[] | string,
  color: Colors,
  size: Size,
  direction: Direction,
}

const AbstractDropdown: React.FC<AbstractDropdown>
  = ({ color, size, title, direction, ...props }) => {

    return (
      <div
        className={`drop${direction}`}>
        <button
          className={`btn btn-${color} ${size ? `btn-${size}` : ""} dropdown-toggle dropdown-responsive`} {...props}
          type='button' data-bs-toggle='dropdown' aria-expanded='false' aria-controls=''
          aria-label='' value=''>
          {title}
        </button>
        <ul
          className="dropdown-menu">
          <ItemDropdown data={"Item 1"} />
        </ul>
      </div>
    );
  };

export default AbstractDropdown;
