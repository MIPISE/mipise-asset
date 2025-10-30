import React, {useEffect, useRef, useState} from "react";
import SelectItem from "./SelectItem";
import optionalManagement from "../optionalManagement";
import parseInputProps from "../parseInputProps";
import {AbstractInputProps} from "../AbstractInput";
import Label from "../Label";

export type SelectOption = {
  label: string;
  value: string | number;
  selected?: boolean
};

export type SelectProps = AbstractInputProps & {
  collection: SelectOption[],
  includeBlank?: boolean
};

const Select: React.FC<SelectProps> = ({collection, required, includeBlank, ...props}) => {
  const selectRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);

  const {name, id, placeholder} = parseInputProps(props);

  const attributeClass = `select--${props.attribute.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
  useEffect(optionalManagement(selectRef, setIsRequired), []);

  return (
    <div className={`form-group ${props.classes}`}>
      {props.label && props.label !== false && (
        <Label isRequired={isRequired} {...props} />
      )}
      <select
        id={id}
        name={name}
        required={required}
        className={`form-select ${attributeClass}`}
        defaultValue={collection.find(c => c.selected)?.value || ""}
        ref={selectRef}
      >
        {includeBlank &&
          <option value="" disabled></option>
        }
        {collection.map((item: SelectOption, idx: number) => (
          <SelectItem key={idx} {...item} />
        ))}
      </select>
    </div>
  );
};

export default Select;
