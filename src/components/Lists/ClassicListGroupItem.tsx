import React from "react";
import {GlobalProps} from "../types";

type ClassicListGroupItem = GlobalProps

const ClassicListGroupItem: React.FC<ClassicListGroupItem> = ({
  children,
  classes = "",
  ...props
}) => {
  return (
    <li className="list-group-item" {...props}>
      {children}
    </li>
  );
};

export default ClassicListGroupItem;
