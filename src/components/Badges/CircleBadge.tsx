import React from "react";
import AbstractBadge, { AbstractBadgeProps } from "./AbstractBadge";

export type CircleBadgeProps = Omit<AbstractBadgeProps, "variant">

const CircleBadge: React.FC<CircleBadgeProps>
  = (props) => {
    return <AbstractBadge {...props} variant={"circle"}></AbstractBadge>;
  }

export default CircleBadge;
