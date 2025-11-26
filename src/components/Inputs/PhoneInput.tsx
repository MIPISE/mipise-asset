import React from "react";
import AbstractInput, {AbstractInputProps} from "./AbstractInput";

type PhoneInputProps = Omit<AbstractInputProps, "type">

const PhoneInput: React.FC<PhoneInputProps> =
  ({label, ...props}) => {
    
    const safeLabel = label === "false" ? "" : label;

    return (
      <AbstractInput 
        type="tel" 
        pattern="^\d{8,15}$" 
        inputMode="numeric" 
        data-behavior="digits-only" 
        {...props} 
        label={safeLabel}
      />
    );
  };

export default PhoneInput;
