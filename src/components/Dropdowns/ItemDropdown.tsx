import React, { ReactElement } from "react";
import {GlobalProps} from "../types";

export type ItemDropdownProps = GlobalProps & {
  children: ReactElement[] | string,
  link: string
}

const ItemDropdown: React.FC<ItemDropdownProps>
  = ({ children, link, ...props }) => {

    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return (
      <li>
        <a className={`dropdown-item ${props.classes}`} href={link} type="button" aria-label="">
          {content}
        </a>
      </li>
    );
  };

export default ItemDropdown;
