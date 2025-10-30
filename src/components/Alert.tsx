import React from "react";
import { Color, GlobalProps } from "./types";
import { Icons } from "icons";
import Icon from "icons";

export type AlertProps = GlobalProps & {
  color: Color;
  dismissible?: boolean;
  large?: boolean;
  icon?: Icons;
  iconType?: "rs" | "ss";
  iconClassName?: string;
};

const Alert: React.FC<AlertProps> = ({
  color,
  children,
  dismissible = false,
  large = false,
  icon,
  iconType = "rs",
  iconClassName = "me-3 d-flex align-items-center",
  ...props
}) => {
  let classes = `alert alert-${color} ${props.classes ?? ""}`;
  if (dismissible) classes += " alert-dismissible";
  if (large) classes += " alert-fluid mb-0";

  return (
    <div className={classes} role="alert">
      <div className={icon ? "d-flex align-items-center" : undefined}>
        {icon && (
          <div className={iconClassName}>
            <Icon icon={icon} type={iconType} classes="display-6" />
          </div>
        )}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          className="btn-close"
          type="button"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      )}
    </div>
  );
};

export default Alert;
