import {GlobalProps} from "../types";
import React, {ReactElement} from "react";
import { NavbarItemProps } from "./NavbarItem";

type NavbarProps = GlobalProps & {
  children: ReactElement<NavbarItemProps>[]
}

const Navbar: React.FC<NavbarProps> =
  ({children, ...props}) => {
    return (
      <ul className={`navbar-nav ${props.classes}`}>
        {children}
      </ul>
    )
  };

export default Navbar;
