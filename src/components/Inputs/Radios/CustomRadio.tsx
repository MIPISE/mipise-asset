import React, {ReactNode} from "react";
import { GlobalProps } from "../../types";
import CustomRadioItem, {CustomRadioItemProps} from "./CustomRadioItem";
import {formatId, formatName} from "../parseInputProps";

export type CustomRadioProps = GlobalProps & {
  attribute: string
  items: CustomRadioItemProps[]
  legend: ReactNode
  objectName: string
}

const CustomRadio: React.FC<CustomRadioProps>
  = ({ attribute, items, legend, objectName, classes = "" }) => {
    return (
      <div className={`form-group ${formatId(objectName, attribute)} radio_buttons ${classes}`}>
        <legend
          className="form-label">
          {legend}
        </legend>
        <input type="hidden" name={formatName(objectName, attribute)} autoComplete="off"/>
        {items.map(i => {
          return <CustomRadioItem attribute={attribute} objectName={objectName} {...i}/>
        })}
      </div>
    );
  };

export default CustomRadio;
