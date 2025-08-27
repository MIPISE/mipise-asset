import React, { ReactElement } from "react";
import { Color, GlobalProps } from "../types";

export type CardProps = GlobalProps & {
  title?: ReactElement[] | string
  children?: ReactElement[] | string
  background: Color
  header?: boolean
  footer?: boolean
}

const Card: React.FC<CardProps>
  = ({ background, children, title, header, footer, ...props }) => {
    let classes = `card bg-${background} ${props.classes}`;

    return (
      <div className={classes}>
        {header && (<div className="card-header">
          {title && <h2>{title}</h2>}
        </div>)}
        <div className="card-body">
          {children}
        </div>
        {footer && (<div className="card-footer"></div>)}
      </div>
    );
  };

export default Card;
