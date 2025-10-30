import React from "react";
import { Color, GlobalProps } from "./types";
import { Icons } from "./icons";
import Icon from "./Icon";

export type AlertProps = GlobalProps & {
  color: Color;
  dismissible?: boolean;
  large?: boolean;
  icon?: Icons | string;
  iconType?: "rs" | "ss";
  iconClassName?: string;
  iconWrapperClassName?: string;
};

const Alert: React.FC<AlertProps> = ({
  color,
  children,
  dismissible = false,
  large = false,
  icon,
  iconType = "rs",
  iconClassName = "col-1 display-6",
  iconWrapperClassName,
  ...props
}) => {
  let classes = `alert alert-${color} ${props.classes ?? ""}`;
  if (dismissible) classes += " alert-dismissible";
  if (large) classes += " alert-fluid mb-0";

  return (
    <div className={classes} role="alert">
      <div className={icon ? "d-flex align-items-center" : undefined}>
        {icon && (
          iconWrapperClassName ? (
            <div className={iconWrapperClassName}>
              <Icon icon={icon} type={iconType} classes={iconClassName} />
            </div>
          ) : (
            <Icon icon={icon} type={iconType} classes={iconClassName} />
          )
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
