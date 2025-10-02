import React, {useEffect, useRef, useState} from "react";
import optionalManagement from "./optionalManagement";
import {AbstractInputProps} from "./AbstractInput";
import Label from "./Label";
import InputItem from "./InputItem";
import HiddenInput from "./HiddenInput";

const CheckboxInput: React.FC<AbstractInputProps> = ({
  required,
  hint,
  checked,
  ...props
}) => {
  const inputRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);
  useEffect(optionalManagement(inputRef, setIsRequired), []);

  return (
    <div className={`form-group ${props.classes}`}>
      <div className="form-check">
        <HiddenInput {...props} />
        <InputItem type="checkbox" ref={inputRef} inputHtmlProps={{classes: "form-check-input"}} defaultChecked={checked} {...props} />
        <Label classes="form-check-label" isRequired={isRequired} {...props}/>
        {hint && <div
            className="hint">
          {hint}
        </div>}
      </div>
    </div>
  );
  };

export default CheckboxInput;
