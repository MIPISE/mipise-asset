import React from "react";
import {GlobalProps} from "./types";

export type RowInheritProps = GlobalProps

const RowInherit: React.FC<RowInheritProps>
  = (props) => {
    return (
      <div className={`row g-3 py-1 py-xl-1 ${props.classes}`}>
      </div>
    );
  };

export default RowInherit;