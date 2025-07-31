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
  const inputRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);

  const [showed, setShowed] = useState(false);
  const handleShowClick = () => {
    setShowed(!showed);
  }

  useEffect(optionalManagement(inputRef, setIsRequired), []);

  return (
    <div className={`form-group ${parseInputProps(props).id} ${props.classes || ""}`}>
      <Label isRequired={isRequired} {...props}/>
      <div className="input-group">
        <InputItem type={showed ? "text" : "password"} ref={inputRef} {...props}/>
        <button className="btn btn-primary btn-square rounded-end" type="button" onClick={handleShowClick}>
          <Icon icon={showed ? Icons.HIDE_PASSWORD : Icons.SHOW_PASSWORD}/>
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
