import React, { ReactElement } from "react";
import {GlobalProps} from "./types";

export type TabsItemProps = GlobalProps & {
  label: ReactElement[] | string,
  id: ReactElement[] | string,
  active: boolean
}

const TabsItem: React.FC<TabsItemProps>
  = ({ label, active, id, ...props }) => {
    return (
      <>
        <li className={`nav-item ${props.classes}`} id={`${id}`}>
          <a className={`nav-link ${active ? "active" : null}`} aria-current="page" id={`${id}`} href="#">{label}</a>
        </li>
      </>
    );
  };

export default TabsItem;