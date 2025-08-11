import React from "react";
import {AbstractInputProps} from "./AbstractInput";
import InputItem from "./InputItem";

type HiddenInputProps = Omit<AbstractInputProps, "type">

const HiddenInput: React.FC<HiddenInputProps> = ({ ...props }) => {
  return <InputItem type="hidden" {...props}/>
}

export default HiddenInput;
