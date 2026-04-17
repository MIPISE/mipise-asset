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
    <>
      <style>
        {`
          .mr-tab-pane { display: none !important; }
          .mr-tab-pane.active { display: block !important; }
        `}
      </style>

      <div 
        className={`tab-pane mr-tab-pane ${active ? "active" : ""} ${classes}`} 
        id={`${id}-pane`} 
        role={"tabpanel"} 
        aria-labelledby={id} 
        tabIndex={0}
      >
        {children}
      </div>
    </>
  )
}

export default Pane;
