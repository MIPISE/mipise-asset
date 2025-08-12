import React, {useEffect, useRef, useState} from "react";
import {GlobalProps} from "../types";
import optionalManagement from "./optionalManagement";
import Label from "./Label";
import parseInputProps from "./parseInputProps";

type TextAreaProps = GlobalProps & {
  attribute: string,
  value?: string
  objectName?: string,
  label?: string
  placeholder?: string
  required?: boolean
  rows?: number
  cols?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  required,
  rows,
  cols,
  classes = "",
  ...props
}) => {
  // Avoid children in props with react.jsx
  delete props.children

  const textAreaRef = useRef(null);
  const [isRequired, setIsRequired] = useState(required || false);
  useEffect(optionalManagement(textAreaRef, setIsRequired), []);

  const { name, id, placeholder } = parseInputProps(props);
  rows ||= 5;
  cols ||= 5;

  // Avoid React warning for unknown props
  delete props.objectName

  return (
    <div className={`form-group ${id} ${classes}`}>
      <Label isRequired={isRequired} {...props}/>
      <textarea
        id={id}
        name={name}
        className={"form-control"}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        required={isRequired}
        defaultValue={value || ""}
        ref={textAreaRef}
        {...props}/>
    </div>
  );
};

export default TextArea;
