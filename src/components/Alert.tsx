import React from "react";
import {Color, GlobalProps} from "./types";

type AlertProps = GlobalProps & {
  color: Color,
  dismissible?: boolean,
  large?: boolean
}

const Alert: React.FC<AlertProps>
  = ({ color, children, dismissible = false, large = false, ...props }) => {
    let classes = `alert alert-${color} ${props.classes}`;

    if (dismissible)
      classes += " alert-dismissible";

    if (large)
      classes += " alert-fluid mb-0";

    return (
      <div className={classes} role={"alert"}>
        { children }
        {dismissible &&
          <button className={"btn-close"} type={"button"} data-bs-dismiss="alert" aria-label={"Close"}></button>
        }
      </div>
    );
  };

export default Alert;
