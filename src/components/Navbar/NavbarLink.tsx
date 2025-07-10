import {GlobalProps} from "../types";
import React from "react";
import Icon from "../Icon";
import { Icons } from "../icons";

type NavbarLinkProps = GlobalProps & {
  link: string,
  label: string,
  icon?: Icons
}

const NavbarLink: React.FC<NavbarLinkProps> =
  ({link, label, icon, ...props}) => {
    return (
      <a className={`nav-link ${props.classes}`} href={link}>
        {icon && <Icon name={icon}/>}
        {label}
      </a>
    )
  };

export default NavbarLink;