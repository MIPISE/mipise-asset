import {GlobalProps} from "../types";
import React from "react";
import Icon from "../Icon";
import { Icons } from "../icons";

type NavbarLinkProps = GlobalProps & {
  link: string,
  label: string,
  icon?: Icons,
  rightIcon?: Icons,
  rightIconClasses?: string
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  link,
  label,
  icon,
  rightIcon,
  rightIconClasses,
  ...props
}) => {
    return (
      <a className={`nav-link ${props.classes}`} href={link}>
        {icon && <Icon icon={icon}/>}
        {label}
        {rightIcon && <Icon icon={rightIcon} classes={rightIconClasses}/>}
      </a>
    )
  };

export default NavbarLink;
