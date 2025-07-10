import React, { ReactElement } from "react";
import {GlobalProps} from "../types";

export type ItemCheckboxProps = GlobalProps & {
  data: ReactElement[] | string,
}

const ItemCheckbox: React.FC<ItemCheckboxProps>
  = ({ data, ...props }) => {

    return (
      <div className={`form-check ${props.classes}`}>
        <input className="form-check-input" type="checkbox" name="" id="" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {data}
        </label>
      </div>
    );
  };

export default ItemCheckbox;
