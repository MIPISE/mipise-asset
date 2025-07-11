import { GlobalProps } from "./types";
import React from "react";
import iconMapping, { Icons } from "./icons";

type IconProps = GlobalProps & {
  icon: Icons
  type?: "rs" | "ss"
}

const Icon: React.FC<IconProps> =
  ({icon, type = "rs", ...props}) => {
    const foundIcon = iconMapping(icon);
    if (!foundIcon) {
      console.error("Icône " + icon.toUpperCase() + " introuvable dans la table de mappage");
      return;
    }

    return (
      <i className={`fi fi-${type}-${foundIcon} ${props.classes}`} aria-hidden={true}></i>
    )
  };

export default Icon;