import React from "react";
import AbstractInput, {AbstractInputProps} from "./AbstractInput";

type PhoneInputProps = Omit<AbstractInputProps, "type">

const PhoneInput: React.FC<PhoneInputProps> =
  ({...props}) => {
    return (
      <AbstractInput type={"phone"} pattern="^\\d{8,15}$" inputMode="numeric" data-behavior="digits-only" {...props}/>
    );
  };

export default PhoneInput;
