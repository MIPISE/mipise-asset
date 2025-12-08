import React, { useEffect, useRef, useState } from "react";
import { AbstractInputProps } from "./AbstractInput";
import Icon from "../Icon";
import { Icons } from "../icons";
import Label from "./Label";
import InputItem from "./InputItem";
import optionalManagement from "./optionalManagement";
import parseInputProps from "./parseInputProps";

// On s'assure que 'error' est bien typé (généralement inclus dans AbstractInputProps, mais on peut le préciser)
type PasswordInputProps = Omit<AbstractInputProps, "type"> & { error?: string };

const PasswordInput: React.FC<PasswordInputProps> = ({
  required,
  error, // 1. On extrait l'erreur ici pour l'utiliser
  classes = "", // On extrait classes pour pouvoir concaténer
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isRequired, setIsRequired] = useState(required || false);

  const [showed, setShowed] = useState(false);
  const handleShowClick = () => setShowed(!showed);

  useEffect(optionalManagement(inputRef, setIsRequired), []);

  const { id } = parseInputProps(props);

  const hasLabel = typeof props.label === "string" && props.label.trim() !== "";

  // 2. On calcule les classes de l'input : on ajoute 'is-invalid' si 'error' existe
  const computedInputClasses = `${classes} ${error ? "is-invalid" : ""}`.trim();

  return (
    <div className={`form-group ${id} password ${classes}`}>
      {hasLabel && <Label isRequired={isRequired} {...props} />}

      {/* 'has-validation' est utile pour Bootstrap 5 avec les input-groups */}
      <div className="input-group has-validation">
        <InputItem
          type={showed ? "text" : "password"}
          ref={inputRef}
          required={isRequired}
          classes={computedInputClasses} // On passe la classe avec is-invalid
          {...props}
        />
        <button
          className="btn btn-primary btn-square rounded-end"
          type="button"
          onClick={handleShowClick}
          // Optionnel : empêcher le tab focus sur le bouton oeil si besoin
          tabIndex={-1}
        >
          <Icon icon={showed ? Icons.HIDE_PASSWORD : Icons.SHOW_PASSWORD} />
        </button>

        {/* 3. AFFICHAGE DE L'ERREUR */}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>

      {props.hint && <div className="form-text">{props.hint}</div>}
    </div>
  );
};

export default PasswordInput;
