import React from "react";
import {GlobalProps} from "../types";

const Tab: React.FC<GlobalProps> = ({
  children,
  classes = ""
}) => {
  return (
    <ul className={`nav nav-underline overflow-x ${classes}`} role="tablist">
      {children}
    </ul>
  );
};

export default Tab;
