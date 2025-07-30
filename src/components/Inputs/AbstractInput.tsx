import React, {HTMLInputTypeAttribute, InputHTMLAttributes, ReactElement} from "react";
import { GlobalProps } from "../types";

export type AbstractInputProps = GlobalProps & InputHTMLAttributes<HTMLInputElement> & {
  attribute: string;
  type?: HTMLInputTypeAttribute
  objectName?: string;
  label?: ReactElement[] | string;
  placeholder?: ReactElement[] | string;
  hint?: ReactElement[] | string;
  inputHtmlProps?: {
    classes: string
  }
};

// Fonction utilitaire pour extraire du texte d’un ReactElement[] ou string
export const extractText = (node?: ReactElement[] | string): string => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    return node.map(child => (typeof child === "string" ? child : "")).join(" ");
  }
  return "";
};

const AbstractInput: React.FC<AbstractInputProps> = ({
  attribute,
  type = "text",
  objectName = "user",
  label,
  placeholder,
  hint,
  inputHtmlProps,
  ...props
}) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;

  const displayLabel = label || attribute.charAt(0).toUpperCase() + attribute.slice(1);
  const placeholderText = placeholder !== undefined
    ? extractText(placeholder)
    : extractText(displayLabel);

  const inputClasses = inputHtmlProps?.classes || "form-control";

  return (
    <div className={`form-group ${id} ${props.classes || ""}`}>
      <label htmlFor={id} className="form-label">
        {displayLabel}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={inputClasses}
        placeholder={placeholderText}
      />
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
};

export default AbstractInput;
