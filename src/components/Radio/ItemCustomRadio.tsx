import React, { ReactElement } from "react";
import { Colors, Size } from "../types";

export type ItemCustomRadioProps = {
  data: ReactElement[] | string,
  variantIcone?: boolean,
}

const ItemCustomRadio: React.FC<ItemCustomRadioProps>
  = ({ data, variantIcone, ...props }) => {

    return (
      <>
        <input
          className="btn-check" type="radio" name="" id="" />
        <label
          className={`${variantIcone ? "btn btn-light btn-radio d-flex flex-wrap flex-column align-items-center py-3" : "btn btn-light"}`} {...props} htmlFor="">
          {variantIcone ? <i className="fi fi-rs-credit-card fs-3 text-primary me-2" aria-aria-hidden="true">
          </i> : null}
          {data}
        </label>
      </>
    );
  };

export default ItemCustomRadio;
