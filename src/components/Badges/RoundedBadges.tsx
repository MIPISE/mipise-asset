import React from "react";
import AbstractBadges, { AbstractBadgesProps } from "./AbstractBadges";

export type RoundedBadgesProps = Omit<AbstractBadgesProps, "rounded">

const RoundedBadges: React.FC<RoundedBadgesProps>
  = (props) => {
    return <AbstractBadges {...props} rounded={"rounded"}></AbstractBadges>;
  }

export default RoundedBadges;
