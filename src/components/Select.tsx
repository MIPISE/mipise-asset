import React, { ReactElement } from "react";
import { Colors, GlobalProps } from "./types";
import SelectItem from "./SelectItem";

export type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = GlobalProps & {
  attribute: string;
  objectName?: string;
  label?: ReactElement[] | string;
  placeholder?: ReactElement[] | string;
  color: Colors;
  collection: SelectOption[];
  required?: boolean;
};

const Select: React.FC<SelectProps> = ({
  attribute,
  objectName = "user",
  label,
  placeholder,
  color,
  collection,
  required = false,
  ...props
}) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;
  const displayLabel =
    label || attribute.charAt(0).toUpperCase() + attribute.slice(1);
  const attributeClass = `select--${attribute.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  return (
    <div className={`form-group ${props.classes}`}>
      <label htmlFor={id} className="form-label">
        {displayLabel}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        className={`form-select form-select-${color} ${attributeClass}`}
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {collection.map((item, idx) => (
          <SelectItem key={idx} label={item.label} value={item.value} />
        ))}
      </select>
    </div>
  );
};

export default Select;
