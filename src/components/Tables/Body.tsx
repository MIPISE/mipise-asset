import React from "react";
import {GlobalProps} from "../types";

const Body: React.FC<GlobalProps> = ({
  children,
  classes = "",
  ...props
}) => {
  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  );
};

export default Body;
