import React, { useEffect, useRef, useState } from "react";
import SelectItem from "./SelectItem";
import optionalManagement from "../optionalManagement";
import parseInputProps from "../parseInputProps";
import { AbstractInputProps } from "../AbstractInput";
import Label from "../Label";

export type SelectOption = {
  label: string;
  value: string | number;
  selected?: boolean;
};

export type SelectProps = AbstractInputProps & {
  collection: SelectOption[] | string;
  includeBlank?: boolean | string;
};

const Select: React.FC<SelectProps> = ({
  collection,
  required,
  includeBlank,
  label,
  ...props
}) => {
  const selectRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);

  const { name, id, placeholder } = parseInputProps(props);

  const attributeClass = `select--${props.attribute.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
  useEffect(optionalManagement(selectRef, setIsRequired), []);
  const safeLabel = label === "false" || label === false ? "" : label;

  const safeCollection: SelectOption[] =
    typeof collection === "string" ? JSON.parse(collection) : collection;

  const showBlank =
    includeBlank === true || includeBlank === "true" || includeBlank === "";

  return (
    <div className={`form-group ${props.classes}`}>
      {}
      {safeLabel && (
        <Label isRequired={isRequired} label={safeLabel} {...props} />
      )}
      <select
        id={id}
        name={name}
        required={required}
        className={`form-select ${attributeClass}`}
        defaultValue={safeCollection.find((c) => c.selected)?.value || ""}
        ref={selectRef}
      >
        {showBlank && <option value="" disabled></option>}
        {safeCollection &&
          safeCollection.map((item: SelectOption, idx: number) => (
            <SelectItem key={idx} {...item} />
          ))}
      </select>
    </div>
  );
};

export default Select;
