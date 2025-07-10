import React, { ReactElement } from "react";
import ItemCheckbox from "./ItemCheckbox";
import {GlobalProps} from "../types";

export type AbstractCheckboxProps = GlobalProps & {
  label: ReactElement[] | string,
  helpText?: string
}

const AbstractCheckbox: React.FC<AbstractCheckboxProps>
  = ({ label, helpText, ...props }) => {

    return (
      <div className={`form-group ${props.classes}`}>`
        <label
          className="form-label">
          {label}
        </label>
        <ItemCheckbox
          data={"Célibataire"} />
        {helpText && <div
          className="form-text">
          {helpText}
        </div>}
      </div>
    );
  };

export default AbstractCheckbox;
