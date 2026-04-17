import React, { ReactElement } from "react";
import { GlobalProps } from "../../types";

export type SelectItemProps = GlobalProps & {
  label: ReactElement[] | string;
  value: string | number;
};

const SelectItem: React.FC<SelectItemProps> = ({
  label,
  value,
  classes = ""
}) => {
  return (
    <option value={value} className={classes}>
      {label}
    </option>
  );
};

export default SelectItem;
