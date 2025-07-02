import React, { ReactElement } from "react";
import { Colors, Size, Direction } from "../types";
import ItemRadio from "./ItemRadio";


export type AbstractRadioProps = {
  label: ReactElement[] | string,
}

const AbstractRadio: React.FC<AbstractRadioProps>
  = ({ label, ...props }) => {

    return (
      <div className="form-group">
        <legend
          className="form-label">
          {label}
        </legend>
        <ItemRadio data={"Célibataire"} />
      </div>
    );
  };

export default AbstractRadio;
