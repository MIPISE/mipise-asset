import React from "react";
import AbstractInput, {AbstractInputProps} from "./AbstractInput";
import Icon from "../Icon";
import {Icons} from "../icons";

type PasswordInputProps = Omit<AbstractInputProps, "type">

const PasswordInput: React.FC<PasswordInputProps> =
  ({...props}) => {
    return (
      <div className="input-group">
        <AbstractInput type={"password"} {...props}/>
        <button className="btn btn-primary btn-square rounded-end" type="button" id="password-visibility-toggle">
          <Icon icon={Icons.SHOW_PASSWORD}/>
        </button>
      </div>
    );
  };

export default PasswordInput;
