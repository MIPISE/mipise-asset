import React from "react";
import {GlobalProps} from "../types";

export type ItemDropdownProps = GlobalProps & {
  link: string,
  inNav?: boolean
}

const ItemDropdown: React.FC<ItemDropdownProps>
  = ({ children, link, inNav, classes = "", ...props }) => {
    return (
      <li>
        <a className={`${inNav ? "nav-link" : "dropdown-item"} ${classes}`} href={link} type="button" aria-label="" {...props}>
          {children}
        </a>
      </li>
    );
  };

export default ItemDropdown;
