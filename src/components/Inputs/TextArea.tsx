import {extractText} from "./AbstractInput";
import React, {useEffect, useRef, useState} from "react";
import {GlobalProps} from "../types";
import optionalManagement from "./optionalManagement";
import OptionalText from "./OptionalText";

type TextAreaProps = GlobalProps & {
  attribute: string,
  value?: string
  objectName?: string,
  label?: string
  placeholder?: string
  required?: boolean
  rows?: number
  cols?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  attribute,
  value,
  objectName = "user",
  label,
  placeholder,
  required,
  rows,
  cols,
  ...props
}) => {
  // Avoid children in props with react.jsx
  delete props.children

  const textAreaRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);

  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;

  const placeholderText = placeholder !== undefined
    ? extractText(placeholder)
    : extractText(label);

  rows ||= 5;
  cols ||= 5;

  useEffect(optionalManagement(textAreaRef, setIsRequired), []);

  return (
    <div className={`form-group ${id} ${props.classes || ""}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label} {!isRequired && <OptionalText/>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={"form-control"}
        placeholder={placeholderText}
        rows={rows}
        cols={cols}
        required={isRequired}
        defaultValue={value || ""}
        ref={textAreaRef}
        {...props}/>
    </div>
  );
};

export default TextArea;
