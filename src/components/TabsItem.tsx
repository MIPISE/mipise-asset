import React, { ReactElement } from "react";

export type TabsItemProps = {
  label: ReactElement[] | string,
  id: ReactElement[] | string,
  active: boolean
}

const TabsItem: React.FC<TabsItemProps>
  = ({ label, active, id }) => {
    return (
      <>
        <li className="nav-item" id={`${id}`}>
          <a className={`nav-link ${active ? "active" : null}`} aria-current="page" id={`${id}`} href="#">{label}</a>
        </li>
      </>
    );
  };

export default TabsItem;