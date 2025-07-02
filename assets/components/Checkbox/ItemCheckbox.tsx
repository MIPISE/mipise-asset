import React, { ReactElement } from "react";

export type ItemCheckboxProps = {
  data: ReactElement[] | string,
}

const ItemCheckbox: React.FC<ItemCheckboxProps>
  = ({ data, ...props }) => {

    return (
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="" id="" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {data}
        </label>
      </div>
    );
  };

export default ItemCheckbox;
