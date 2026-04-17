import React from "react";
import {GlobalProps} from "./types";

const RowInherit: React.FC<GlobalProps>
  = ({children, classes = ""}) => {
    return (
      <div className={`row g-3 py-1 py-xl-1 ${classes}`}>
        {children}
      </div>
    );
  };

export default RowInherit;
