import React, { ReactElement } from "react";

export type ItemDropdown = {
  children: ReactElement[] | string,
  link: string
}

const ItemDropdown: React.FC<ItemDropdown>
  = ({ children, link }) => {

    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return (
      <li>
        <a className="dropdown-item" href={link} type="button" aria-label="">
          {content}
        </a>
      </li>
    );
  };

export default ItemDropdown;
