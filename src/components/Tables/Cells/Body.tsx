import React from "react";
import {CellProps} from "../Table";

const Body: React.FC<CellProps> = ({
  action,
  children,
  classes = "",
  colspan = 1,
  ...props
}) => {
  return (
    <td className={`${classes}${action ? " action" : ""}`} colSpan={colspan} {...props}>
      {children}
    </td>
  )
}

export default Body;
