import React, {ReactElement, useEffect, useRef, useState} from "react";
import {GlobalProps} from "../../types";
import optionalManagement from "../optionalManagement";
import OptionalText from "../OptionalText";

export type ItemRadioProps = GlobalProps & {
  data: ReactElement[] | string
  required?: boolean
}

const ItemRadio: React.FC<ItemRadioProps>
  = ({ data, required, ...props }) => {
    return (
      <div className={`form-check ${props.classes}`}>
        <input className="form-check-input" type="radio" name="" id=""/>
        <label className="form-check-label" htmlFor="">
          {data}
        </label>
      </div>
    );
  };

export default ItemRadio;
