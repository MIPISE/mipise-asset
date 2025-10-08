import React from "react";
import { Icons } from "./icons";
import Icon from "./Icon";
import Alert, {AlertProps} from "./Alert";

type IconAlertProps = AlertProps & {
  icon: Icons
}

const IconAlert: React.FC<IconAlertProps>
  = ({ children, icon, ...props }) => {
    return (
      <Alert {...props}>
        <div className="d-flex align-items-center">
          <Icon icon={icon} classes={"col col-xs-2 col-sm-2 col-md-1 display-6"} />
          <div>
            {children}
          </div>
        </div>
      </Alert>
    );
  };

export default IconAlert;
