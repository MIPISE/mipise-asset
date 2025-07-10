import React, { ReactElement } from "react";
import ItemRadio from "./ItemRadio";
import {GlobalProps} from "../types";

export type AbstractRadioProps = GlobalProps & {
  label: ReactElement[] | string,
  helpText?: string
}

const AbstractRadio: React.FC<AbstractRadioProps>
  = ({ label, helpText, ...props }) => {

    return (
      <div className={`form-group ${props.classes}`}>
        <legend
          className="form-label">
          {label}
        </legend>
        <ItemRadio data={"Célibataire"} />
        {helpText && <div
            className="form-text">
          {helpText}
        </div>}
      </div>
    );
  };

export default AbstractRadio;
