import React from "react";
import AbstractButton, { AbstractButtonProps } from "./AbstractButton";

type SubtleButtonProps = Omit<AbstractButtonProps, "variant">

const SubtleButton: React.FC<SubtleButtonProps>
  = (props) => {
    return <AbstractButton {...props} variant={"subtle"}></AbstractButton>;
  }

export default SubtleButton;
