import React, { ReactElement } from "react";
import { Colors } from "./types";

export type SelectItemProps = {
  data: ReactElement[] | string,
}

const SelectItem: React.FC<SelectItemProps>
  = ({ data }) => {
    return (
      <>
        <option value="" selected>{data}</option>
      </>
    );
  };

export default SelectItem;