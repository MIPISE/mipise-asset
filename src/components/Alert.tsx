import React, { ReactElement } from "react";
import {Colors, GlobalProps} from "./types";

type AlertProps = GlobalProps & {
  children: ReactElement[] | string,
  color: Colors,
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
        <span dangerouslySetInnerHTML={{ __html: children }} />
        {dismissible &&
          <button className={"btn-close"} type={"button"} data-bs-dismiss="alert" aria-label={"Close"}></button>
        }
      </div>
    );
  };

export default Alert;