import React from "react";
import { CellProps } from "../Table";

const Body: React.FC<CellProps> = ({
  children,
  classes = "",
  colspan = 1,
  ...props
}) => {
  return (
    <td className={`${classes}`} colSpan={colspan} {...props}>
      {children}
    </td>
  )
}

export default Body;
