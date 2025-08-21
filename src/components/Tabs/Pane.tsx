import React from "react";
import {GlobalProps} from "../types";

type Pane = GlobalProps & {
  active: boolean
  id: string
}

const Pane: React.FC<Pane> = ({
  active,
  children,
  id,
  classes = ""
}) => {
  return (
    <div className={`tab-pane fade${active ? " show active" : ""} ${classes}`} id={`${id}-pane`} role={"tabpanel"} aria-labelledby={id} tabIndex={0}>
      {children}
    </div>
  )
}

export default Pane;
