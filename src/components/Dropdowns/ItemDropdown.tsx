import React from "react";
import {GlobalProps} from "../types";
import confirmation from "../handlers/confirmation";

export type ItemDropdownProps = GlobalProps & {
  link: string
  inNav?: boolean
  type?: "button" | "submit"
  confirmText?: string
}

const ItemDropdown: React.FC<ItemDropdownProps>
  = ({ children, link, inNav, type = "button", confirmText, classes = "", ...props }) => {
    const className = `${inNav ? "nav-link" : "dropdown-item"} ${classes}`;

    return (
      <li>
        {type == "submit"
          ? <button className={className}
              onClick={(event) => {
                if (confirmText)
                  confirmation(event, confirmText);
              }}
              type={"submit"}
              {...props}>{children}</button>
          : <a className={className}
               onClick={(event) => {
                 if (confirmText)
                   confirmation(event, confirmText);
               }} href={link} aria-label="" {...props}>{children}</a>
        }
      </li>
    );
  };

export default ItemDropdown;
