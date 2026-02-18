import React from "react";
import {AbstractInputProps} from "./AbstractInput";
import InputItem from "./InputItem";

type HiddenInputProps = Omit<AbstractInputProps, "type"> & {
  inputName?: string;
  form?: string;
  value?: string | number | string[];
}

const HiddenInput: React.FC<HiddenInputProps> = ({ inputName, ...props }) => {
  return <InputItem type="hidden" autoComplete="off" name={inputName} {...props}/>
}

export default HiddenInput;
