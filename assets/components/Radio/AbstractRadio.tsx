import React, { ReactElement } from "react";
import ItemRadio from "./ItemRadio";

type helpTextProp = false | string | undefined;

export type AbstractRadioProps = {
  label: ReactElement[] | string,
  helpText: helpTextProp
}

const AbstractRadio: React.FC<AbstractRadioProps>
  = ({ label, helpText, ...props }) => {

    return (
      <div className="form-group">
        <legend
          className="form-label">
          {label}
        </legend>
        <ItemRadio data={"Célibataire"} />
        <div
          className="form-text">
          {helpText}
        </div>
      </div>
    );
  };

export default AbstractRadio;
