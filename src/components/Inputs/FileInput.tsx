import React from "react";
interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "required"> {
  required?: boolean | string;
  classes?: string;
  attribute?: string;
  objectName?: string;
  noLabel?: boolean;
  
  inputHtmlProps?: {
    classes?: string;
    value?: any;
    defaultValue?: any;
    [key: string]: any;
  };
}

const FileInput: React.FC<FileInputProps> = ({
  attribute,
  objectName,
  noLabel,
  value,
  defaultValue,
  children,
  
  classes,
  inputHtmlProps = {},
  required,
  className,
  
  ...rest
}) => {
  
  const isRequired = String(required) === "true";

  const jsonClasses = inputHtmlProps.classes || "";
  const rawClasses = `visually-hidden ${jsonClasses} ${className || ""}`;
  const finalClassName = Array.from(new Set(rawClasses.split(" "))).join(" ").trim();

  const { 
    value: ignoredValue, 
    defaultValue: ignoredDefaultValue, 
    classes: ignoredClasses, 
    ...safeInputHtmlProps 
  } = inputHtmlProps;

  return (
    <input
      type="file"
      {...safeInputHtmlProps}
      className={finalClassName}
      required={isRequired}
    />
  );
};

export default FileInput;