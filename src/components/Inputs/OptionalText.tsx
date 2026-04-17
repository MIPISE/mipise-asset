import React from "react";
import {GlobalProps} from "../types";

declare global {
  interface Window { gon: any }
}

const OptionalText: React.FC<GlobalProps> = ({...props}) => {
  return <span className={`optional-text ${props.classes || ""}`}>{window.gon.i18n.optional_field}</span>
}

export default OptionalText;
