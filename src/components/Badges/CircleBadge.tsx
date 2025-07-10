import React from "react";
import AbstractBadge, { AbstractBadgeProps } from "./AbstractBadge";
import IconBadge, { IconBadgeProps } from "./IconBadge";

export type CircleBadgeProps = Omit<AbstractBadgeProps | IconBadgeProps, "variant">

const CircleBadge: React.FC<CircleBadgeProps>
  = (props) => {
    return <AbstractBadge {...props} variant={"circle"}></AbstractBadge>;
  }

export default CircleBadge;
