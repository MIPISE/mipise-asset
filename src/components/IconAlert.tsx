import React from "react";
import { Color, GlobalProps } from "./types";
import { Icons } from "./icons";
import Icon from "./Icon";

type IconAlertProps = GlobalProps & {
  color: Color,
  dismissible?: boolean,
  large?: boolean,
  icon: Icons
}

const IconAlert: React.FC<IconAlertProps>
  = ({ color, children, dismissible = false, large = false, icon, ...props }) => {
    let classes = `alert alert-${color} ${props.classes}`;

    if (dismissible)
      classes += " alert-dismissible";

    if (large)
      classes += " alert-fluid mb-0";

    return (
      <div className={classes} role={"alert"}>
        <div className="d-flex align-items-center">
          <Icon icon={icon} classes={"col col-xs-2 col-sm-2 col-md-1 display-6"} />
          <div>
            {children}
          </div>
        </div>
        {dismissible &&
          <button className={"btn-close"} type={"button"} data-bs-dismiss="alert" aria-label={"Close"}></button>
        }
      </div>
    );
  };

export default IconAlert;
