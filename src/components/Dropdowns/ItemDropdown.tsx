import React, { ReactElement } from "react";
import {GlobalProps} from "../types";

export type ItemDropdownProps = GlobalProps & {
  children: ReactElement[] | string,
  link: string,
  inNav?: boolean
}

const ItemDropdown: React.FC<ItemDropdownProps>
  = ({ children, link, inNav, ...props }) => {

    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    const classes = `${inNav ? "nav-link" : "dropdown-item"} ${props.classes}`;
    return (
      <li>
        <a className={classes} href={link} type="button" aria-label="">
          {content}
        </a>
      </li>
    );
  };

export default ItemDropdown;
