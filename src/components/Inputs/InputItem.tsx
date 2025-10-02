import React, {HTMLInputTypeAttribute, InputHTMLAttributes, ReactElement, RefObject} from "react";
import {GlobalProps} from "../types";
import parseInputProps from "./parseInputProps";

export type InputItemProps = GlobalProps & InputHTMLAttributes<HTMLInputElement> & {
  attribute: string
  ref?: RefObject<any>
  type?: HTMLInputTypeAttribute
  objectName?: string
  placeholder?: ReactElement[] | string
  required?: boolean
  hint?: ReactElement[] | string
  value?: string
  inputHtmlProps?: {
    classes?: string
    additionalClasses?: string
  },
  noLabel?: boolean
  label?: string
};

const InputItem: React.FC<InputItemProps> = ({ref, type, value, required, ...props}) => {
  const { id, name, inputClasses, placeholder } = parseInputProps(props);

  // Avoid children for void element
  delete props.children;

  // Avoid double props
  delete props.attribute;
  delete props.inputHtmlProps;
  delete props.label;
  delete props.noLabel;
  delete props.objectName;

  return (
    <input type={type}
      id={type == "hidden" ? null : id}
      name={name}
      className={type == "hidden" ? null : inputClasses}
      placeholder={type == "hidden" ? null : placeholder}
      required={required}
      ref={ref}
      defaultValue={value}
      {...props}
    />
  );
}

export default InputItem;
