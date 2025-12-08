import React from "react";
import { GlobalProps } from "../../types";
import Icon from "../../Icon";
import { Icons } from "../../icons";
import { formatId, formatName } from "../parseInputProps";

export type CustomRadioItemProps = GlobalProps & {
  attribute: string;
  label: string;
  objectName: string;
  selected: boolean;
  value: string;
  icon?: Icons;
  disabled?: boolean;
};

const CustomRadioItem: React.FC<CustomRadioItemProps> = ({
  attribute,
  label,
  objectName,
  selected,
  value,
  icon,
  classes = "",
  disabled = false,
  ...props
}) => {
  const id = `${formatId(objectName, attribute)}_${value}`;

  return (
    <>
      <input
        className={`btn-check visually-hidden ${classes}`}
        type="radio"
        name={formatName(objectName, attribute)}
        id={id}
        defaultChecked={selected}
        autoComplete="off"
        value={value}
        disabled={disabled}
      />
      <label
        className={`${icon ? "btn btn-light btn-radio d-flex flex-wrap flex-column align-items-center py-3" : "btn btn-light me-1 mt-0"}`}
        {...props}
        htmlFor={id}
      >
        {icon && <Icon icon={icon} classes={`fs-3 text-primary me-2`} />}
        {label}
      </label>
    </>
  );
};

export default CustomRadioItem;
