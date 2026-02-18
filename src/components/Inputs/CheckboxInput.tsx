import React, { useEffect, useRef, useState } from "react";
import optionalManagement from "./optionalManagement";
import { AbstractInputProps } from "./AbstractInput";
import Label from "./Label";
import InputItem from "./InputItem";
import HiddenInput from "./HiddenInput";

const CheckboxInput: React.FC<AbstractInputProps> = ({
  required,
  hint,
  checked,
  error,
  ...props
}) => {
  const inputRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);
  useEffect(optionalManagement(inputRef, setIsRequired), []);

  const inputClasses = `form-check-input ${error ? "is-invalid" : ""}`;

  return (
    <div className={`form-group boolean ${props.classes || ""}`}>
      <div className="form-check">
        <HiddenInput {...props} />
        <InputItem
          type="checkbox"
          ref={inputRef}
          inputHtmlProps={{ classes: inputClasses }}
          defaultChecked={checked}
          required={isRequired}
          {...props}
        />
        <Label classes="form-check-label" isRequired={isRequired} {...props} />
        {error && <div className="invalid-feedback d-block">{error}</div>}
        {hint && <div className="form-text">{hint}</div>}
      </div>
    </div>
  );
};

export default CheckboxInput;
