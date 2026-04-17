import React from "react";
import {GlobalProps} from "../types";

const Row: React.FC<GlobalProps> = ({
  children,
  classes = "",
  ...props
}) => {
  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  )
};

export default Row;
