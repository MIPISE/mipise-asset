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

// Fonction utilitaire pour extraire du texte d’un ReactElement[] ou string
const extractText = (node?: ReactElement[] | string): string => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    return node.map(child => (typeof child === "string" ? child : "")).join(" ");
  }
  return "";
};

const Input: React.FC<InputProps> = ({
  attribute,
  objectName = "user",
  label,
  placeholder,
  hint,
  color,
  ...props
}) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;

  const placeholderText = placeholder !== undefined
    ? extractText(placeholder)
    : extractText(label);

  return (
    <div className={`form-group ${props.classes || ""}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholderText}
      />
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
};

export default Input;
