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

export const formatId = (objectName: string, attribute: string) => {
  return `${objectName.replaceAll("[", "_").replaceAll("]", "")}_${attribute}`;
}

export const formatName = (objectName: string, attribute: string) => {
  return `${objectName}[${attribute}]`;
}

export default ({
  attribute,
  objectName,
  label,
  placeholder,
  inputHtmlProps,
  noLabel
}: InputItemProps & Omit<LabelProps, "isRequired">) => {
  const name = objectName ? formatName(objectName, attribute) : attribute;
  const id = objectName ? formatId(objectName, attribute) : attribute;

  const displayLabel = noLabel ? "" : label || attribute.charAt(0).toUpperCase() + attribute.slice(1);
  const placeholderText = placeholder !== undefined
    ? extractText(placeholder)
    : extractText(displayLabel);

  const inputClasses = inputHtmlProps?.classes || ("form-control" + (inputHtmlProps?.additionalClasses ? " " + inputHtmlProps.additionalClasses : ""));
  return {name, id, label: displayLabel, placeholder: placeholderText, inputClasses};
}
