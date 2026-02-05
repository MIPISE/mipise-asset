import React, { ReactElement, useEffect, useRef, useState } from "react";
import ItemRadio from "./ItemRadio";
import optionalManagement from "../optionalManagement";
import { AbstractInputProps } from "../AbstractInput";
import OptionalText from "../OptionalText";

export type AbstractRadioProps = AbstractInputProps & {
  label: ReactElement[] | string,
  helpText?: string,
  data: ReactElement[] | string;
}

const AbstractRadio: React.FC<AbstractRadioProps>
  = ({ label, required, helpText, data, ...props }) => {
    const inputRef = useRef(null);
    const [isRequired, setIsRequired] = useState(required || false);
    useEffect(optionalManagement(inputRef, setIsRequired), []);

    return (
      <div className={`form-group ${props.classes}`}>
        <legend
          className="form-label">
          {label} {!isRequired && <OptionalText />}
        </legend>
        <ItemRadio data={data} />
        {helpText && <div
          className="form-text">
          {helpText}
        </div>}
      </div>
    );
  };

export default AbstractRadio;
