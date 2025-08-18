import React from "react";
import {GlobalProps} from "../../types";

type LengthSelectorProps = GlobalProps & {
  attribute: string
  id?: string
  options?: number[]
}

const LengthSelector: React.FC<LengthSelectorProps> = ({
  attribute,
  id,
  options = [10, 25, 50, 100],
  children,
  classes = "",
  ...props
}) => {
  id ||= attribute;

  return (
    <label>
      <select className="form-select form-select-sm" name={attribute} id={id} aria-controls={attribute} {...props}>
        {options.map(option => {
          return <option value={option}>{option}</option>
        })}
      </select>
    </label>
  )
};

export default LengthSelector;
