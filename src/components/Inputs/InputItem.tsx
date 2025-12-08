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

  // 1. Récupération de la classe passée par le parent (ex: "is-invalid")
  const customClasses = props.classes || "";

  // 2. Calcul de la classe finale (Fusion)
  // On combine les classes standards (form-control...) avec les classes spécifiques (is-invalid)
  const finalClassName = `${inputClasses || ""} ${customClasses}`.trim();

  // Avoid children for void element
  delete props.children;

  // Avoid double props
  delete props.attribute;
  delete props.inputHtmlProps;
  delete props.label;
  delete props.noLabel;
  delete props.objectName;

  // 3. NETTOYAGE : On supprime 'classes' pour éviter l'attribut HTML invalide <input classes="...">
  delete props.classes;

  return (
    <input
      type={type}
      id={type == "hidden" ? undefined : id} // 'undefined' est préférable à 'null' pour les attributs React
      name={name}
      // 4. Utilisation de la classe fusionnée
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
