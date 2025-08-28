import OptionalText from "./OptionalText";
import React from "react";
import parseInputProps from "./parseInputProps";
import { GlobalProps } from "../types";

export type LabelProps = GlobalProps & {
  attribute: string
  isRequired: boolean
  label?: string
  objectName?: string
}

const Label: React.FC<LabelProps> =
  ({ isRequired, ...props }) => {
    const { label, id } = parseInputProps(props);
    return (
      <>
        {label != "" &&
          <label htmlFor={id} className={props.classes || "form-label"}>
            {label} {!isRequired && <OptionalText />}
          </label>
        }
      </>
    );
  };

export default Label;
