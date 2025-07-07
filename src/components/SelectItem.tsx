import React, { ReactElement } from "react";
import { Colors } from "./types";

export type SelectItemProps = {
  label: ReactElement[] | string,
}

const SelectItem: React.FC<SelectItemProps>
  = ({ label }) => {
    return (
      <>
        <option value="" selected>{label}</option>
      </>
    );
  };

export default SelectItem;