import React from "react";
import { Icons } from "../icons";
import Icon from "../Icon";
import { AbstractBadgeProps } from "./AbstractBadge";

export type IconBadgeProps = AbstractBadgeProps & {
    icon: Icons
    visuallyHidden?: boolean

}

const IconBadge: React.FC<IconBadgeProps>
    = ({ color, size, variant, children, rounded, icon, ...props }) => {
        return (
            <div className={`badge badge-${color} ${size ? `badge-${size}` : ""} ${variant ? `badge-${variant}` : ""} ${rounded ? ` rounded-${rounded}` : ""} ${props.classes || ""}`}>
                {children && (
                    <span className="d-sm-flex d-none pe-1" {...props}>
                        {children}
                    </span>
                )}
                <Icon icon={icon} />
            </div>
        );
    };

export default IconBadge;

