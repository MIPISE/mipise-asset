import React from "react";
import {GlobalProps} from "../types";

const DropdownMenu: React.FC<GlobalProps> = ({children, classes = "", ...props}) => {
  return <ul className={`dropdown-menu ${classes}`} {...props}>
    {children}
  </ul>
}

export default DropdownMenu;
