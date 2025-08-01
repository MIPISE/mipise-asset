import React, {HTMLInputTypeAttribute, InputHTMLAttributes, ReactElement, RefObject} from "react";
import {GlobalProps} from "../types";
import parseInputProps from "./parseInputProps";

export type InputItemProps = GlobalProps & InputHTMLAttributes<HTMLInputElement> & {
  attribute: string;
  ref?: RefObject<any>
  type?: HTMLInputTypeAttribute
  objectName?: string;
  placeholder?: ReactElement[] | string
  required?: boolean;
  hint?: ReactElement[] | string;
  inputHtmlProps?: {
    classes?: string
    additionalClasses?: string
  }
};

const InputItem: React.FC<InputItemProps> = ({ref, type, required, ...props}) => {
  const { id, name, inputClasses, placeholder } = parseInputProps(props);

  // Avoid children for void element
  delete props.children;

  // Avoid double props
  delete props.attribute;
  delete props.inputHtmlProps;
  delete props.objectName;

  return (
    <input type={type}
      id={id}
      name={name}
      className={inputClasses}
      placeholder={placeholder}
      required={required}
      ref={ref}
      {...props}
    />
  );
}

export default InputItem;
