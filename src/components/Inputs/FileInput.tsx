import React from "react";
import AbstractInput, {AbstractInputProps} from "./AbstractInput";

type FileInputProps = Omit<AbstractInputProps, "type">

const FileInput: React.FC<FileInputProps> = ({
  children,
  classes = "",
  ...props
}) => {
  return (
    <AbstractInput type="file" inputHtmlProps={{classes: "visually-hidden"}} {...props} />
  );
};

export default FileInput;
