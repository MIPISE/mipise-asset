import React from "react";
import { Icons } from "../icons";
import Icon from "../Icon";
import {AbstractBadgeProps} from "./AbstractBadge";

export type IconBadgeProps = AbstractBadgeProps & {
    icon: Icons
}

const IconBadge: React.FC<IconBadgeProps>
    = ({ color, size, variant, children, rounded, icon, ...props }) => {

        let content;
        if (Array.isArray(children) || React.isValidElement(children)) {
            content = children;
        } else {
            content = <span dangerouslySetInnerHTML={{ __html: children }} />;
        }

        return (
            <div className={`badge badge-${color} ${size ? `badge-${size}` : ""} ${variant ? `badge-${variant}` : ""} ${rounded ? ` rounded-${rounded}` : ""} ${props.classes || ""}`}>
                <Icon icon={icon} classes={"pe-1"}/>
                <span className="d-sm-flex d-none pe-1" {...props}>
                    {content}
                </span>
            </div>
        );
    };

export default IconBadge;
