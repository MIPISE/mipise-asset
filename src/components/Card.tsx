import React from "react";
import { Color, GlobalProps } from "./types";

export type CardProps = GlobalProps & {
  background: Color
}

const Card: React.FC<CardProps>
  = ({ background, children, classes = "", ...props }) => {
    let className = `card bg-${background} ${classes}`;

    return (
      <div className={className}>
        <div className="card-body">
          {children}
        </div>
      </div>
    );
  };

export default Card;
