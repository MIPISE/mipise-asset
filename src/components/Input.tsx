import React, { ReactElement } from "react";
import { Colors, GlobalProps } from "./types";

export type InputProps = GlobalProps & {
  attribute: string; // ← ex: "email"
  objectName?: string; // ← ex: "user", "admin"
  label?: ReactElement[] | string;
  placeholder?: ReactElement[] | string;
  color: Colors;
};

const Input: React.FC<InputProps> = ({
  attribute,
  objectName = "user",
  label,
  placeholder,
  color,
  ...props
}) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;
  const displayLabel =
    label || attribute.charAt(0).toUpperCase() + attribute.slice(1);

  const attributeClass = `input--${attribute.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  return (
    <div className={`form-group ${props.classes}`}>
      <label htmlFor={id} className="form-label">
        {displayLabel}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className={`form-control test form-control-${color} ${attributeClass}`}
        placeholder={placeholder?.toString()}
      />
    </div>
  );
};

export default Input;
