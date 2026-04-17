import React from "react";
import {GlobalProps} from "./types";

const RowBody: React.FC<GlobalProps>
  = ({children, classes = ""}) => {
    return (
      <div className={`row g-3 py-1 py-xl-3 ${classes}`}>
        {children}
      </div>
    );
  };

export default RowBody;
