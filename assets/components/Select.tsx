import React, { ReactElement } from "react";
import { Colors } from "./types";
import SelectItem from "./SelectItem";

export type SelectProps = {
  label: ReactElement[] | string,
  placeholder: ReactElement[] | string,
  color: Colors,
}

const Select: React.FC<SelectProps>
  = ({ label }) => {
    return (
      <div className="form-group">
        <label for="" className="form-label">{label}</label>
        <select id="inputCategory" className="form-select">
          <SelectItem data={"coucou"} />
        </select>
      </div>
    );
  };

export default Select;