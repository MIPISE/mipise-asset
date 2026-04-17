import React from "react";
import AbstractButton, { AbstractButtonProps } from "./AbstractButton";

type LinkButtonProps = Omit<AbstractButtonProps, "variant">

const LinkButton: React.FC<LinkButtonProps>
  = (props) => {
    return <AbstractButton {...props} variant={"link"}></AbstractButton>;
}

export default LinkButton;
