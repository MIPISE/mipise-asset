import React, { ReactElement } from "react";
import { Colors, Size, Direction } from "../types";
import CustomRadio from "./CustomRadio";
import ItemCustomRadio from "./ItemCustomRadio";


export type CustomRadioIconeProps = {
  label: ReactElement[] | string,
  variantIcone?: boolean
}

const CustomRadioIcone: React.FC<CustomRadioIconeProps>
  = ({ label, variantIcone, ...props }) => {

    return (
      <CustomRadio label={""}>
        <ItemCustomRadio data={""} variantIcone />
      </CustomRadio>
    );
  };

export default CustomRadioIcone;
