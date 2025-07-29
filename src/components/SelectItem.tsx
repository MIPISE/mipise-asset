import React, { ReactElement } from "react";
import { GlobalProps } from "./types";

export type SelectItemProps = GlobalProps & {
  label: ReactElement[] | string;
  value: string | number;
  selected?: boolean; // gérer une sélection manuelle
};

const SelectItem: React.FC<SelectItemProps> = ({
  label,
  value,
  selected = false,
  classes = ""
}) => {
  return (
    <option value={value} className={classes} selected={selected}>
      {label}
    </option>
  );
};

export default SelectItem;
