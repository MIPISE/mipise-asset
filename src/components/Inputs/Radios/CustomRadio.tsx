import React, { ReactNode } from "react";
import { GlobalProps } from "../../types";
import CustomRadioItem, { CustomRadioItemProps } from "./CustomRadioItem";
import { formatId, formatName } from "../parseInputProps";

export type CustomRadioProps = GlobalProps & {
  attribute: string;
  items: CustomRadioItemProps[];
  legend: ReactNode;
  objectName: string;
  hint?: string;
  disabled?: boolean;
};

const CustomRadio: React.FC<CustomRadioProps> = ({
  attribute,
  items,
  legend,
  objectName,
  hint,
  classes = "",
  disabled = false,
}) => {
  return (
    <div
      className={`form-group ${formatId(objectName, attribute)} radio_buttons ${classes}`}
    >
      <legend className={`form-label ${disabled ? "text-muted" : ""}`}>
        {legend}
      </legend>

      <input
        type="hidden"
        name={formatName(objectName, attribute)}
        autoComplete="off"
      />
      {items.map((i, index) => {
        return (
          <CustomRadioItem
            key={index}
            attribute={attribute}
            objectName={objectName}
            disabled={disabled}
            {...i}
          />
        );
      })}
      <div className="mt-2">
        <small className="form-text text-muted">{hint}</small>
      </div>
    </div>
  );
};

export default CustomRadio;
