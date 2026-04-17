import React from "react";
import {CellProps} from "../Table";

const Head: React.FC<CellProps> = ({
  action,
  children,
  classes = "",
  colspan = 1,
  ...props
}) => {
  return (
    <th className={`${classes}${action ? " action" : ""}`} colSpan={colspan} {...props}>
      {children}
    </th>
  )
}

export default Head;
