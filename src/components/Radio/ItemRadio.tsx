import React, { ReactElement } from "react";
import { Colors, Size } from "../types";

export type ItemRadioProps = {
  data: ReactElement[] | string,
}

const ItemRadio: React.FC<ItemRadioProps>
  = ({ data, ...props }) => {

    return (
      <div className="form-check">
        <input className="form-check-input" type="radio" name="" id="" />
        <label className="form-check-label" htmlFor="">
          {data}
        </label>
      </div>
    );
  };

export default ItemRadio;
