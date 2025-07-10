import React, { ReactElement } from "react";
import {Colors, GlobalProps, Size} from "../types";
import { Icons } from "../icons";
import Icon from "../Icon";

export type IconBadgeProps = GlobalProps & {
    children: ReactElement[] | string,
    color: Colors,
    size: Size,
    icon: Icons,
    variant?: "circle",
    rounded?: "rounded"
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
            <div className={`badge badge-${color} ${size ? `badge-${size}` : ""} ${variant ? `badge-${variant}` : ""} ${props.classes} ${rounded ? `${rounded}` : ""}`}>
                <Icon name={icon} classes={"pe-1"}/>
                <span className="d-sm-flex d-none pe-1" {...props}>
                    {content}
                </span>
            </div>
        );
    };

export default IconBadge;
