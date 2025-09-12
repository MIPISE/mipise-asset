import React from "react";
import AbstractBadge, { AbstractBadgeProps } from "./AbstractBadge";

export type SquareBadgeProps = Omit<AbstractBadgeProps, "variant">

const SquareBadge: React.FC<SquareBadgeProps>
  = (props) => {
    return <AbstractBadge {...props} variant={"square"}></AbstractBadge>;
  }

export default SquareBadge;
