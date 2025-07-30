import React, { ReactElement } from "react";
import { GlobalProps } from "../../types";
import CustomRadio from "./CustomRadio";
import ItemCustomRadio from "./ItemCustomRadio";

export type CustomRadioIconProps = GlobalProps & {
  label: ReactElement[] | string,
  variantIcon?: boolean
}

const CustomRadioIcon: React.FC<CustomRadioIconProps>
  = ({ label, variantIcon, ...props }) => {

    return (
      <CustomRadio className={props.classes} label={""}>
        <ItemCustomRadio data={""} variantIcon />
      </CustomRadio>
    );
  };

export default CustomRadioIcon;
