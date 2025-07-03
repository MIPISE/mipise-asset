import React, { ReactElement } from "react";
import { Colors, Size, Direction } from "../types";
import ItemDropdown from "../Dropdowns/ItemDropdown";


export type AbstractDropdown = {
  title: ReactElement[] | string,
  color: Colors,
  size?: Size,
  direction?: Direction,
  fullW?: boolean
}

const AbstractDropdown: React.FC<AbstractDropdown>
  = ({ color, size, title, direction, fullW, ...props }) => {

    return (
      <div
        className={`drop${direction} ${fullW ? `d-grid` : ""}`}>
        <button
          className={`btn btn-${color} ${size ? `btn-${size}` : ""} ${fullW ? `d-flex flex-start justify-content-between align-items-center` : ""}  dropdown-toggle dropdown-responsive`} {...props}
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
