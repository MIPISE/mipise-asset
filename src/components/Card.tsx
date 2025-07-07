import React, { ReactElement } from "react";
import { Colors, BgColors } from "./types";

type CardProps = {
  children: ReactElement[] | string,
  background: BgColors,
  border: Colors
}

const Alert: React.FC<CardProps>
  = ({ background, children, border }) => {
    let classes = `card ${background}`;
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

export default Alert;