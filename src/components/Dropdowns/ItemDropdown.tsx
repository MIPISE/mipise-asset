import React from "react";
import {GlobalProps} from "../types";

export type ItemDropdownProps = GlobalProps & {
  link: string,
  inNav?: boolean,
  type?: "button" | "submit"
}

const ItemDropdown: React.FC<ItemDropdownProps>
  = ({ children, link, inNav, type = "button", classes = "", ...props }) => {
    const className = `${inNav ? "nav-link" : "dropdown-item"} ${classes}`;

    return (
      <li>
        {type == "submit"
          ? <button className={className} type={"submit"} {...props}>
              {children}
            </button>
          : <a className={className} href={link} aria-label="" {...props}>
              {children}
            </a>
        }
      </li>
    );
  };

export default ItemDropdown;
