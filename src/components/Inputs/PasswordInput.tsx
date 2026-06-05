import React, { useEffect, useRef, useState } from "react";
import { AbstractInputProps } from "./AbstractInput";
import Label from "./Label";
import InputItem from "./InputItem";
import optionalManagement from "./optionalManagement";
import parseInputProps from "./parseInputProps";
import Icon from "../Icon";
import { Icons } from "../icons";

type PasswordInputProps = Omit<AbstractInputProps, "type"> & { error?: string };

const PasswordInput: React.FC<PasswordInputProps> = ({
  required,
  error,
  classes = "",
  label,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isRequired, setIsRequired] = useState(required || false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(optionalManagement(inputRef, setIsRequired), []);

  const { id } = parseInputProps(props);

  const safeLabel = label === "false" ? "" : label;
  const hasLabel = typeof safeLabel === "string" && safeLabel.trim() !== "";

  const computedInputClasses = `${classes} ${error ? "is-invalid" : ""}`.trim();

  return (
    <div className={`form-group ${id} password-input`}>
      {hasLabel && (
        <Label isRequired={isRequired} label={safeLabel} {...props} />
      )}

      <div className="input-group has-validation">
        <InputItem
          type={isVisible ? "text" : "password"}
          ref={inputRef}
          required={isRequired}
          classes={computedInputClasses}
          {...props}
        />

        <button
          type="button"
          className="btn btn-primary rounded-end"
          aria-label={isVisible ? "Masquer" : "Afficher"}
          aria-pressed={isVisible}
          onClick={() => setIsVisible((value) => !value)}
        >
          <Icon icon={isVisible ? Icons.HIDE_PASSWORD : Icons.SHOW_PASSWORD} />
        </button>

        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      {props.hint && <div className="form-text">{props.hint}</div>}
    </div>
  );
};

export default PasswordInput;
