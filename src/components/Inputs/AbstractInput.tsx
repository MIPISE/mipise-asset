import React, {useEffect, useRef, useState} from "react";
import optionalManagement from "./optionalManagement";
import InputItem, {InputItemProps} from "./InputItem";
import Label, {LabelProps} from "./Label";
import parseInputProps from "./parseInputProps";

export type AbstractInputProps = Omit<LabelProps, "isRequired"> & InputItemProps & {
 hint?: string
}

const AbstractInput: React.FC<AbstractInputProps> = ({
  required,
  hint,
  ...props
}) => {
  const inputRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);
  useEffect(optionalManagement(inputRef, setIsRequired), []);

  return (
    <div className={`form-group ${parseInputProps(props).id} ${props.type} ${props.classes || ""}`}>
      <Label isRequired={isRequired} {...props}/>
      <InputItem required={isRequired} ref={inputRef} {...props}/>
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
};

export default AbstractInput;
