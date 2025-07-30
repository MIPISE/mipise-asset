import React, {useEffect, useRef, useState} from "react";
import {GlobalProps} from "../types";
import optionalManagement from "./optionalManagement";
import OptionalText from "./OptionalText";

export type CheckboxInputProps = GlobalProps & {
  attribute: string;
  objectName?: string;
  label?: string;
  required?: boolean
  hint?: string
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  attribute,
  objectName = "user",
  label,
  required,
  hint,
  ...props
}) => {
    const inputRef = useRef(null);
    const [isRequired, setIsRequired] = useState(required || false);

    const name = `${objectName}[${attribute}]`;
    const id = `${objectName}_${attribute}`;

    const displayLabel = label || attribute.charAt(0).toUpperCase() + attribute.slice(1);
    useEffect(optionalManagement(inputRef, setIsRequired), []);

    return (
      <div className={`form-group ${props.classes}`}>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name={name} id={id} ref={inputRef} required={isRequired} />
          <label className="form-check-label" htmlFor={id}>
            {displayLabel} {!isRequired && <OptionalText/>}
          </label>
          {hint && <div
              className="hint">
            {hint}
          </div>}
        </div>
      </div>
    );
  };

export default CheckboxInput;
