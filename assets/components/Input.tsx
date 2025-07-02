import React, { ReactElement } from "react";
import { Colors } from "./types";

export type InputProps = {
  label: ReactElement[] | string,
  placeholder: ReactElement[] | string,
  color: Colors,
}

const Input: React.FC<InputProps>
  = ({ color, label, placeholder }) => {
    return (
      <div className="form-group">
        <label htmlFor="" className="form-label">{label}</label>
        <input type="text" className="form-control" id="" placeholder={`${placeholder}`} />
      </div>
    );
  };

export default Input;