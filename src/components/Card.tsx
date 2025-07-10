import React, { ReactElement } from "react";
import {Colors, GlobalProps} from "./types";

type CardProps = GlobalProps & {
  children: ReactElement[] | string,
  background: Colors,
  border: Colors
}

const Card: React.FC<CardProps>
  = ({ background, children, border, ...props }) => {
    let classes = `card bg-${background} ${props.classes}`;
    let content;
    if (Array.isArray(children) || React.isValidElement(children)) {
      content = children;
    } else {
      content = <span dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return (
      <div className={classes}>
        <div className="card-body">
          <p>{content}</p>
        </div>
      </div>
    );
  };

export default Card;