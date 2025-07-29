import React, { ReactElement } from "react";
import { Colors, GlobalProps } from "./types";

export type InputProps = GlobalProps & {
  attribute: string;
  objectName?: string;
  label?: ReactElement[] | string;
  placeholder?: ReactElement[] | string;
  hint?: ReactElement[] | string;
  color: Colors;
};

const Input: React.FC<InputProps> = ({ attribute, objectName = "user", label, placeholder, hint, color, ...props }) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;
  const displayLabel = label || attribute.charAt(0).toUpperCase() + attribute.slice(1);
  const effectivePlaceholder = placeholder || displayLabel;

  return (
    <div className={`form-group ${props.classes}`}>
      <label htmlFor={id} className="form-label">
        {displayLabel}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="form-control"
        placeholder={effectivePlaceholder.toString()}
      />
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
};

export default Input;
