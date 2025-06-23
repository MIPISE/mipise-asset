import React, {ReactElement} from "react";

export enum ButtonColors {
    DEFAULT = "primary",
    DANGER = "danger",
    SUCCESS = "success",
    DARK = "dark"
}

export enum ButtonSizes {
    SMALL = "sm",
    MEDIUM = "md",
    SUCCESS = "lg"
}

export type AbstractButtonProps = {
    children: ReactElement[] | string,
    color: ButtonColors,
    size: ButtonSizes,
    variant?: "link" | "subtle"
}

const AbstractButton: React.FC<AbstractButtonProps>
  = ({color, size, variant, children, ...props}) => {
    const colorAndVariantClass = `btn-${color}${(variant ? `-${variant}` : "")}`;

    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
        content = children;
    } else {
        content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return (
        <button className={`btn ${colorAndVariantClass} ${size ? `btn-${size}` : ""}`} {...props}>
            {content}
        </button>
    );
};

export default AbstractButton;
