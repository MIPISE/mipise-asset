import React, { ReactElement } from "react";
import {Colors, GlobalProps} from "../types";

export type CardProps = GlobalProps & {
  title?: ReactElement[] | string
  children?: ReactElement[] | string
  background: Colors
  header?: boolean
  footer?: boolean
}

const Card: React.FC<CardProps>
  = ({ background, children, title, header, footer, ...props }) => {
    let classes = `card ${background} ${props.classes}`;

    return (
      <div className={classes}>
        {header && (<div className="card-header">
          {title && <h2>{title}</h2>}
        </div>)}
        <div className="card-body">
          {children && <p>{children}</p>}
        </div>
        {footer && (<div className="card-footer"></div>)}
      </div>
    );
  };

export default Card;