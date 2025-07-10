import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";

export type ItemRadioProps = GlobalProps & {
  data: ReactElement[] | string,
}

const ItemRadio: React.FC<ItemRadioProps>
  = ({ data, ...props }) => {

    return (
      <div className={`form-check ${props.classes}`}>
        <input className="form-check-input" type="radio" name="" id="" />
        <label className="form-check-label" htmlFor="">
          {data}
        </label>
      </div>
    );
  };

export default ItemRadio;
