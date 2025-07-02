import React from "react";
import AbstractBadges, { AbstractBadgesProps } from "./AbstractBadges";

export type CircleBadgesProps = Omit<AbstractBadgesProps, "variant">

const CircleBadges: React.FC<CircleBadgesProps>
  = (props) => {
    return <AbstractBadges {...props} variant={"circle"}></AbstractBadges>;
  }

export default CircleBadges;
