import React, {useEffect, useRef, useState} from "react";
import {AbstractInputProps} from "./AbstractInput";
import Icon from "../Icon";
import {Icons} from "../icons";
import Label from "./Label";
import InputItem from "./InputItem";
import optionalManagement from "./optionalManagement";
import parseInputProps from "./parseInputProps";

type PasswordInputProps = Omit<AbstractInputProps, "type">

const PasswordInput: React.FC<PasswordInputProps> = ({
  required,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isRequired, setIsRequired] = useState(required || false);

  const [showed, setShowed] = useState(false);
  const handleShowClick = () => setShowed(!showed);

  useEffect(optionalManagement(inputRef, setIsRequired), []);

  const { id } = parseInputProps(props);

  const hasLabel =
    typeof props.label === "string" && props.label.trim() !== "";

  return (
    <div className={`form-group ${id} password ${props.classes || ""}`}>
      {hasLabel && <Label isRequired={isRequired} {...props} />}
      <div className="input-group">
        <InputItem
          type={showed ? "text" : "password"}
          ref={inputRef}
          required={isRequired}
          {...props}
        />
        <button
          className="btn btn-primary btn-square rounded-end"
          type="button"
          onClick={handleShowClick}
        >
          <Icon icon={showed ? Icons.HIDE_PASSWORD : Icons.SHOW_PASSWORD} />
        </button>
      </div>

      {props.hint && (
        <div className="form-text">{props.hint}</div>
      )}
    </div>
  );
};

export default PasswordInput;
