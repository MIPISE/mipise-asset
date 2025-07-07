import React, { ReactElement } from "react";
import { Colors, Size, Direction } from "../types";
import ItemCustomRadio from "./ItemCustomRadio";


export type CustomRadioProps = {
  label: ReactElement[] | string,
}

const CustomRadio: React.FC<CustomRadioProps>
  = ({ label, ...props }) => {

    return (
      <div className="form-group">
        <legend
          className="form-label">
          {label}
        </legend>
        <ItemCustomRadio data={"Paiement par carte de crédit"} variantIcone />
      </div>
    );
  };

export default CustomRadio;
