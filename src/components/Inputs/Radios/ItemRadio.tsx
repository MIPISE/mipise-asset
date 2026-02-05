import React, { ReactElement } from "react";
import { GlobalProps } from "../../types";

export type ItemRadioProps = GlobalProps & {
  data?: ReactElement[] | string | ReactElement;
  label?: string | ReactElement;
  value?: string | number;
  name?: string;
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  disabled?: boolean;
  objectName?: string;
  attribute?: string;
};

const ItemRadio: React.FC<ItemRadioProps> = ({
  data,
  label,
  value,
  name,
  id,
  required,
  checked,
  defaultChecked,
  disabled,
  objectName,
  attribute,
  classes,
  className,
  ...props
}) => {
  const content = label || data;

  const generatedId =
    id ||
    (name && value
      ? `${name}_${value}`.replace(/[^a-zA-Z0-9-_]/g, "_")
      : undefined);

  return (
    <div className={`form-check ${classes || ""}`}>
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={generatedId}
        value={value}
        required={required}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        {...props}
      />
      <label className="form-check-label" htmlFor={generatedId}>
        {content}
      </label>
    </div>
  );
};

export default ItemRadio;
