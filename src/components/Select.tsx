import React, { ReactElement } from "react";
import { GlobalProps } from "./types";
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
  collection: SelectOption[];
  required?: boolean;
};

const Select: React.FC<SelectProps> = ({attribute, objectName = "user", label, placeholder, collection, required = false, ...props}) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;

  const displayLabel =
    label || attribute.charAt(0).toUpperCase() + attribute.slice(1);

  const attributeClass = `select--${attribute.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  const effectivePlaceholder = placeholder || displayLabel;

  return (
    <div className={`form-group ${props.classes}`}>
      <label htmlFor={id} className="form-label">
        {displayLabel}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        className={`form-select ${attributeClass}`}
        defaultValue=""
      >
        <option value="" disabled>
          {effectivePlaceholder}
        </option>
        {collection.map((item, idx) => (
          <SelectItem key={idx} label={item.label} value={item.value} />
        ))}
      </select>
    </div>
  );
};

export default Select;
