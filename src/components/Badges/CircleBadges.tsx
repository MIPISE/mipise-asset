import React from "react";
import AbstractBadges, { AbstractBadgesProps } from "./AbstractBadges";
import IconeBadges, { IconeBadgesProps } from "./IconeBadges";

export type CircleBadgesProps = Omit<AbstractBadgesProps | IconeBadgesProps, "variant">

const CircleBadges: React.FC<CircleBadgesProps>
  = (props) => {
    return <AbstractBadges {...props} variant={"circle"}></AbstractBadges>;
  }

export default CircleBadges;
