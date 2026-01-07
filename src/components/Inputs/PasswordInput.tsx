import React, { useEffect, useRef, useState } from "react";
import { AbstractInputProps } from "./AbstractInput";
import Label from "./Label";
import InputItem from "./InputItem";
import optionalManagement from "./optionalManagement";
import parseInputProps from "./parseInputProps";

type PhoneInputProps = Omit<AbstractInputProps, "type"> & { error?: string };

const PhoneInput: React.FC<PhoneInputProps> = ({
  required,
  error,
  classes = "",
  label,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isRequired, setIsRequired] = useState(required || false);

  useEffect(optionalManagement(inputRef, setIsRequired), []);

  const { id } = parseInputProps(props);

  const safeLabel = label === "false" ? "" : label;
  const hasLabel = typeof safeLabel === "string" && safeLabel.trim() !== "";

  const computedInputClasses = `${classes} ${error ? "is-invalid" : ""}`.trim();

  return (
    <div className={`form-group ${id} phone-input`}>
      {hasLabel && (
        <Label isRequired={isRequired} label={safeLabel} {...props} />
      )}

      <div className="input-group has-validation">
        <InputItem
          type="tel"
          pattern="^\d{8,15}$"
          inputMode="numeric"
          data-behavior="digits-only"
          ref={inputRef}
          required={isRequired}
          classes={computedInputClasses}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      {props.hint && <div className="form-text">{props.hint}</div>}
    </div>
  );
};

export default PhoneInput;
