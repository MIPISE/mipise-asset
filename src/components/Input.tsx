import React, { ReactElement } from "react";
import {Colors, GlobalProps} from "./types";

export type InputProps = GlobalProps & {
  label: ReactElement[] | string,
  placeholder: ReactElement[] | string,
  color: Colors,
}

const Input: React.FC<InputProps>
  = ({ color, label, placeholder, ...props }) => {
    return (
      <div className={`form-group ${props.classes}`}>
        <label htmlFor="" className="form-label">{label}</label>
        <input type="text" className="form-control" id="" placeholder={`${placeholder}`} />
      </div>
    );
  };

export default Input;