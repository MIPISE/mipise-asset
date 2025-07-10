import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";

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
          {variantIcon ? <i className="fi fi-rs-credit-card fs-3 text-primary me-2" aria-aria-hidden="true">
          </i> : null}
          {data}
        </label>
      </>
    );
  };

export default ItemCustomRadio;
