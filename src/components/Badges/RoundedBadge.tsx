import React from "react";
import AbstractBadge, { AbstractBadgeProps } from "./AbstractBadge";

export type RoundedBadgeProps = Omit<AbstractBadgeProps, "rounded">

const RoundedBadge: React.FC<RoundedBadgeProps>
  = (props) => {
    return <AbstractBadge {...props} rounded={"rounded"}></AbstractBadge>;
  }

export default RoundedBadge;
