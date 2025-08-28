import React from "react";
import AbstractInput, { AbstractInputProps } from "./AbstractInput";

export type DateInputProps = Omit<AbstractInputProps, "type"> & {
  startYear?: number;
  endYear?: number;
}

const DateInput: React.FC<DateInputProps> =
  ({ startYear, endYear, ...props }) => {
    startYear ||= new Date().getFullYear() - 5;
    endYear ||= new Date().getFullYear() + 5;

    const min = `${startYear}-01-01`;
    const max = `${endYear}-12-31`;

    return (
      <AbstractInput type="date" min={min} max={max} {...props} />
    );
  };

export default DateInput;
