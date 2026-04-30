import React, { ReactNode } from "react";
import { GlobalProps } from "../../types";
import CustomRadioItem, { CustomRadioItemProps } from "./CustomRadioItem";
import { formatId, formatName } from "../parseInputProps";

export type CustomRadioProps = GlobalProps & {
  attribute: string;
  items: CustomRadioItemProps[];
  legend: ReactNode;
  objectName: string;
  disabled?: boolean;
};

const CustomRadio: React.FC<CustomRadioProps> = ({
  attribute,
  items,
  legend,
  objectName,
  classes = "",
  disabled = false,
}) => {
  const inputName = formatName(objectName, attribute);

  // Find selected item (important for fallback submission)
  const selectedItem = items.find((i) => i.selected);

  return (
    <div
      className={`form-group ${formatId(objectName, attribute)} radio_buttons ${classes}`}
    >
      <legend className={`form-label ${disabled ? "text-muted" : ""}`}>
        {legend}
      </legend>

      {disabled ? (
        <input
          type="hidden"
          name={inputName}
          value={selectedItem?.value ?? ""}
        />
      ) : (
        <input
          type="hidden"
          name={inputName}
          autoComplete="off"
        />
      )}

      {items.map((i, index) => (
        <CustomRadioItem
          key={index}
          attribute={attribute}
          objectName={objectName}
          disabled={disabled}
          {...i}
        />
      ))}
    </div>
  );
};

export default CustomRadio;
