import {GlobalProps} from "../types";
import React, {ReactElement} from "react";

export type NavbarItemProps = GlobalProps & {
  children: ReactElement | string
}

const NavbarItem: React.FC<NavbarItemProps> =
  ({children, ...props}) => {
    return (
      <li className={`nav-item ${props.classes}`}>
        {children}
      </li>
    )
  };

export default NavbarItem;