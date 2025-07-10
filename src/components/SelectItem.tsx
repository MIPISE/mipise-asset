import React, { ReactElement } from "react";
import {Colors, GlobalProps} from "./types";

export type SelectItemProps = GlobalProps & {
  label: ReactElement[] | string,
}

const SelectItem: React.FC<SelectItemProps>
  = ({ label, ...props }) => {
    return (
      <>
        <option className={props.classes} value="" selected>{label}</option>
      </>
    );
  };

export default SelectItem;