import React from "react";
import AbstractInput, {AbstractInputProps} from "./AbstractInput";

type DateInputProps = Omit<AbstractInputProps, "type"> & {
  startYear?: number;
  endYear?: number;
}

const DateInput: React.FC<DateInputProps> =
  ({ startYear, endYear, ...props }) => {
    startYear ||= new Date().getFullYear() - 5;
    endYear ||= new Date().getFullYear() + 5;

    return (
      <AbstractInput type={"date"} min={startYear} max={endYear} {...props}/>
    );
  };

export default DateInput;
