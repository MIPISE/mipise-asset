import React from "react";
import {GlobalProps} from "../types";

type ItemProps = GlobalProps & {
  active: boolean
  id: string
  label: string
  href?: string
}

const Item: React.FC<ItemProps> = ({
  active,
  id,
  label,
  href,
  classes = ""
}) => {
  const className = `nav-link ${active ? "active" : null}`;
  return (
    <li className={`nav-item ${classes}`} id={`${id}`}>
      {href
        ? <a className={className} href={href}>
            {label}
          </a>
        : <button aria-controls={`${id}-pane`} aria-selected={active}
                  className={className} data-bs-toggle="tab" data-bs-target={`#${id}-pane`} role="tab" id={id}>
            {label}
          </button>
      }
    </li>
  );
};

export default Item;
