import React, { ReactElement } from "react";
import { Colors } from "./types";

type AlertProps = {
  children: ReactElement[] | string,
  color: Colors,
  dismissible?: boolean,
  large?: boolean
}

const Alert: React.FC<AlertProps>
  = ({ color, children, dismissible = false, large = false }) => {
    let classes = `alert alert-${color}`;

    if (dismissible)
      classes += " alert-dismissible";

    if (large)
      classes += " alert-fluid mb-0";

    return (
      <div className={classes} role={"alert"}>
        <span dangerouslySetInnerHTML={{ __html: children }} />
        {dismissible &&
          <button className={"btn-close"} type={"button"} data-bs-dismiss="alert" aria-label={"Close"}></button>
        }
      </div>
    );
  };

export default Alert;