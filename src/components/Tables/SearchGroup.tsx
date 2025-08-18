import React from "react";
import {GlobalProps} from "../types";

const SearchGroup: React.FC<GlobalProps> = ({
  children,
  classes = "",
  ...props
}) => {
  return (
    <div className="hstack gap-3 flex-grow-1" role="toolbar" aria-label="Toolbar search & filters" {...props}>
      {children}
    </div>
  );
}

export default SearchGroup;
