import { GlobalProps } from "./types";
import React from "react";
import iconMapping, { Icons } from "./icons";

type IconProps = GlobalProps & {
  name: Icons
  type?: "rs" | "ss"
}

const Icon: React.FC<IconProps> =
  ({name, type = "rs", ...props}) => {
    const icon = iconMapping(name);
    if (!icon) {
      console.error("Icône " + name.toUpperCase() + " introuvable dans la table de mappage");
      return;
    }

    return (
      <i className={`fi fi-${type}-${icon} ${props.classes}`} aria-hidden={true}></i>
    )
  };

export default Icon;