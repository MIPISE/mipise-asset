import React, { useEffect, useRef, useState } from "react";
import optionalManagement from "./optionalManagement";
import InputItem, { InputItemProps } from "./InputItem";
import Label, { LabelProps } from "./Label";
import parseInputProps from "./parseInputProps";

export type AbstractInputProps = Omit<LabelProps, "isRequired"> &
  InputItemProps & {
    hint?: string;
    error?: string;
  };

const AbstractInput: React.FC<AbstractInputProps> = ({
  required,
  hint,
  error,
  classes = "",
  ...props
}) => {
  const inputRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);
  useEffect(optionalManagement(inputRef, setIsRequired), []);

  const { id } = parseInputProps(props);

  const hasLabel = typeof props.label === "string" && props.label.trim() !== "";

  const computedClasses = `${classes} ${error ? "is-invalid" : ""}`.trim();

  return (
    <div className={`form-group ${id} ${props.type} ${classes}`}>
      {hasLabel && <Label isRequired={isRequired} {...props} />}

      <InputItem
        required={isRequired}
        ref={inputRef}
        classes={computedClasses}
        {...props}
      />

      {error && <div className="invalid-feedback d-block">{error}</div>}

      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
};

export default AbstractInput;
