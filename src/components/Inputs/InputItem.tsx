import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactElement,
  RefObject,
} from "react";
import { GlobalProps } from "../types";
import parseInputProps from "./parseInputProps";

export type InputItemProps = GlobalProps &
  InputHTMLAttributes<HTMLInputElement> & {
    attribute: string;
    ref?: RefObject<any>;
    type?: HTMLInputTypeAttribute;
    objectName?: string;
    placeholder?: ReactElement[] | string;
    required?: boolean;
    hint?: ReactElement[] | string;
    value?: string;
    inputHtmlProps?: {
      classes?: string;
      additionalClasses?: string;
    };
    noLabel?: boolean;
    label?: string;
  };

const InputItem: React.FC<InputItemProps> = ({
  ref,
  type,
  value,
  required,
  ...props
}) => {
  const { id, name, inputClasses, placeholder } = parseInputProps(props);
  const customClasses = props.classes || "";
  const finalClassName = `${inputClasses || ""} ${customClasses}`.trim();

  delete props.children;

  delete props.attribute;
  delete props.inputHtmlProps;
  delete props.label;
  delete props.noLabel;
  delete props.objectName;

  delete props.classes;

  return (
    <input
      type={type}
      id={type == "hidden" ? undefined : id}
      name={name}
      className={type == "hidden" ? undefined : finalClassName}
      placeholder={type == "hidden" ? undefined : placeholder}
      required={required}
      ref={ref}
      defaultValue={value}
      {...props}
    />
  );
};

export default InputItem;
