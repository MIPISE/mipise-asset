import {extractText} from "./AbstractInput";
import React from "react";
import {GlobalProps} from "../types";

type TextAreaProps = GlobalProps & {
  attribute: string,
  objectName?: string,
  label?: string
  placeholder?: string
  rows?: number
  cols?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  attribute,
  objectName = "user",
  label,
  placeholder,
  rows,
  cols,
  ...props
}) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;

  const placeholderText = placeholder !== undefined
    ? extractText(placeholder)
    : extractText(label);

  rows ||= 5;
  cols ||= 5;

  return (
    <div className={`form-group ${id} ${props.classes || ""}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={"form-control"}
        placeholder={placeholderText}
        rows={rows}
        cols={cols}
        {...props}
      />
    </div>
  );
};

export default TextArea;
