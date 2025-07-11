import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";
import Icon from "../Icon";
import {Icons} from "../icons";

export type ItemCustomRadioProps = GlobalProps & {
  data: ReactElement[] | string,
  variantIcon?: boolean,
}

const ItemCustomRadio: React.FC<ItemCustomRadioProps>
  = ({ data, variantIcon, ...props }) => {

    return (
      <>
        <input
          className={`btn-check ${props.classes}`} type="radio" name="" id="" />
        <label
          className={`${variantIcon ? "btn btn-light btn-radio d-flex flex-wrap flex-column align-items-center py-3" : "btn btn-light"}`} {...props} htmlFor="">
          {variantIcon && <Icon icon={Icons.CREDIT_CARD} classes={`fs-3 text-primary me-2`}/>}
          {data}
        </label>
      </>
    );
  };

export default ItemCustomRadio;
