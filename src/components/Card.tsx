import React, { ReactElement } from "react";
import { Color, GlobalProps } from "./types";

export type CardProps = GlobalProps & {
  children: ReactElement[] | string,
  background: Color,
  border: Color
}

const Card: React.FC<CardProps>
  = ({ background, children, border, ...props }) => {
    let classes = `card bg-${background} ${props.classes}`;

    return (
      <div className={classes}>
        <div className="card-body">
          {children}
        </div>
      </div>
    );
  };

export default Card;
