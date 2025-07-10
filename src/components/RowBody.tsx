import React from "react";
import {GlobalProps} from "./types";

export type RowBodyProps = GlobalProps

const RowBody: React.FC<RowBodyProps>
  = (props) => {
    return (
      <div className={`row g-3 py-1 py-xl-3 ${props.classes}`}>
      </div>
    );
  };

export default RowBody;