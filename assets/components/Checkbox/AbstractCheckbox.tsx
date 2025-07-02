import React, { ReactElement } from "react";
import ItemCheckbox from "./ItemCheckbox";


export type AbstractCheckboxProps = {
  label: ReactElement[] | string,
}

const AbstractCheckbox: React.FC<AbstractCheckboxProps>
  = ({ label, ...props }) => {

    return (
      <div className="form-group">
        <label
          className="form-label">
          {label}
        </label>
        <ItemCheckbox data={"Célibataire"} />
      </div>
    );
  };

export default AbstractCheckbox;
