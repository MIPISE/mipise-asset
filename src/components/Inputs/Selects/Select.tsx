import React, {ReactElement, useEffect, useRef, useState} from "react";
import { GlobalProps } from "../../types";
import SelectItem from "./SelectItem";
import optionalManagement from "../optionalManagement";
import OptionalText from "../OptionalText";

export type SelectOption = {
  label: string;
  value: string | number;
  selected?: boolean
};

export type SelectProps = GlobalProps & {
  attribute: string;
  collection: string | SelectOption[];
  objectName?: string;
  label?: ReactElement[] | string;
  placeholder?: ReactElement[] | string;
  required?: boolean;
};

const Select: React.FC<SelectProps> = ({attribute, collection, objectName = "user", label, placeholder, required = false, ...props}) => {
  const selectRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);

  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;

  const displayLabel =
    label || attribute.charAt(0).toUpperCase() + attribute.slice(1);

  const attributeClass = `select--${attribute.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  const effectivePlaceholder = placeholder || displayLabel;

  if (typeof collection == "string") {
    if (!collection.startsWith("[")) {
      console.warn("Collection is not an array");
      return;
    }

    collection = JSON.parse(collection) as SelectOption[];
  }

  useEffect(optionalManagement(selectRef, setIsRequired), []);

  return (
    <div className={`form-group ${props.classes}`}>
      <label htmlFor={id} className="form-label">
        {displayLabel} {!isRequired && <OptionalText/>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        className={`form-select ${attributeClass}`}
        defaultValue={collection.find(c => c.selected)?.value || ""}
        ref={selectRef}
      >
        <option value="" disabled>
          {effectivePlaceholder}
        </option>
        {collection.map((item: SelectOption, idx: number) => (
          <SelectItem key={idx} {...item} />
        ))}
      </select>
    </div>
  );
};

export default Select;
