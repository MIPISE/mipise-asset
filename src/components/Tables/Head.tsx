import React from "react";
import {GlobalProps} from "../types";

const Head: React.FC<GlobalProps> = ({
  children,
  classes = "",
  ...props
}) => {
  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  );
};

export default Head;
