import React, { ReactElement } from "react";
import { GlobalProps } from "../../types";
import ItemCustomRadio from "./ItemCustomRadio";

export type CustomRadioProps = GlobalProps & {
  label: ReactElement[] | string,
}

const CustomRadio: React.FC<CustomRadioProps>
  = ({ label, ...props }) => {

    return (
      <div className={`form-group ${props.classes}`}>
        <legend
          className="form-label">
          {label}
        </legend>
        <ItemCustomRadio data={"Paiement par carte de crédit"} variantIcon />
      </div>
    );
  };

export default CustomRadio;
