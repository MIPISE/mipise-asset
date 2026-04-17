import {GlobalProps} from "../types";
import React from "react";

type ClassicListGroup = GlobalProps & {
  flush?: boolean
}

const ClassicListGroup: React.FC<ClassicListGroup> = ({
  children,
  classes = "",
  flush,
  ...props
}) => {
  let className = ["list-group"];
  flush && className.push("list-group-flush")
  className.push(classes);

  return (
    <ul className={className.join(" ")}>
      {children}
    </ul>
  )
}

export default ClassicListGroup;
