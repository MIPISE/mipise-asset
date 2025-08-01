import {ReactElement} from "react";
import {InputItemProps} from "./InputItem";
import {LabelProps} from "./Label";

// Fonction utilitaire pour extraire du texte d’un ReactElement[] ou string
export const extractText = (node?: ReactElement[] | string): string => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    return node.map(child => (typeof child === "string" ? child : "")).join(" ");
  }
  return "";
};

export default ({
  attribute,
  objectName = "user",
  label,
  placeholder,
  inputHtmlProps
}: InputItemProps & Omit<LabelProps, "isRequired">) => {
  const name = `${objectName}[${attribute}]`;
  const id = `${objectName}_${attribute}`;

  const displayLabel = label || attribute.charAt(0).toUpperCase() + attribute.slice(1);
  const placeholderText = placeholder !== undefined
    ? extractText(placeholder)
    : extractText(displayLabel);

  const inputClasses = inputHtmlProps?.classes || ("form-control" + (inputHtmlProps?.additionalClasses ? " " + inputHtmlProps.additionalClasses : ""));
  return {name, id, label: displayLabel, placeholder: placeholderText, inputClasses};
}
