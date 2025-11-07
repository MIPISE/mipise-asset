import React from "react";
import { GlobalProps } from "../types";

const Head: React.FC<GlobalProps> = ({
  children,
  classes = "",
  ...props
}) => {
  return (
    <tfoot className={classes} {...props}>
      {children}
    </tfoot>
  );
};

export default Head;
