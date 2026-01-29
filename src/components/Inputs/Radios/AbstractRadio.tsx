import React, { ReactElement } from "react";

type AbstractInputProps = {
  classes?: string;
  required?: boolean;
  name?: string;
  id?: string;
  [key: string]: any;
};

export type RadioOption = {
  label: string;
  value: string;
  checked?: boolean;
};

export type AbstractRadioProps = AbstractInputProps & {
  label: ReactElement[] | string;
  helpText?: string;
  options: RadioOption[] | string;
  objectName: string;
  attribute: string;
};

const AbstractRadio: React.FC<AbstractRadioProps> = ({
  label,
  required,
  helpText,
  options,
  objectName,
  attribute,
  classes = "",
  ...props
}) => {
  let safeOptions: RadioOption[] = [];
  try {
    safeOptions = typeof options === "string" ? JSON.parse(options) : options;
  } catch (e) {
    console.error("Erreur parsing JSON", e);
  }

  const inputName =
    objectName && attribute ? `${objectName}[${attribute}]` : "unknown_name";
  const containerId =
    objectName && attribute ? `${objectName}_${attribute}` : "unknown_id";

  return (
    <div className={`form-group ${containerId} radio_buttons ${classes}`}>
      <legend className="form-label">
        {label}{" "}
        {required ? "" : <span className="optional-text">(Optionnel)</span>}
      </legend>

      <input type="hidden" name={inputName} autoComplete="off" />

      {safeOptions &&
        safeOptions.map((option, index) => {
          const radioId = `${containerId}_${option.value}`;

          return (
            <div
              className="form-check d-flex align-items-center mb-2"
              key={index}
            >
              <input
                className="form-check-input me-2"
                type="radio"
                name={inputName}
                id={radioId}
                value={option.value}
                defaultChecked={option.checked}
                required={required}
                style={{ marginTop: 0 }}
              />
              <label className="form-check-label mb-0" htmlFor={radioId}>
                {option.label}
              </label>
            </div>
          );
        })}

      {helpText && <div className="form-text">{helpText}</div>}
    </div>
  );
};

export default AbstractRadio;
