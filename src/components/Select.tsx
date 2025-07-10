import React, { ReactElement } from "react";
import {Colors, GlobalProps} from "./types";
import SelectItem from "./SelectItem";

export type SelectProps = GlobalProps & {
  label: ReactElement[] | string,
  placeholder: ReactElement[] | string,
  color: Colors,
}

const Select: React.FC<SelectProps>
  = ({ label, ...props }) => {
    return (
      <div className={`form-group ${props.classes}`}>
        <label className="form-label">{label}</label>
        <select id="inputCategory" className="form-select">
          <SelectItem label={"coucou"} />
        </select>
      </div>
    );
  };

export default Select;