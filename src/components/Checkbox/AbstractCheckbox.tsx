import React, { ReactElement } from "react";
import ItemCheckbox from "./ItemCheckbox";

type helpTextProp = false | string | undefined;

export type AbstractCheckboxProps = {
  label: ReactElement[] | string,
  helpText: helpTextProp

}

const AbstractCheckbox: React.FC<AbstractCheckboxProps>
  = ({ label, helpText, ...props }) => {

    return (
      <div className="form-group">
        <label
          className="form-label">
          {label}
        </label>
        <ItemCheckbox
          data={"Célibataire"} />
        <div
          className="form-text">
          {helpText}
        </div>
      </div>
    );
  };

export default AbstractCheckbox;
