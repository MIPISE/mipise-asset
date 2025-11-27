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
  const activeClass = active ? "active" : "";

  const handleClick = (e: React.MouseEvent) => {
    if (!href) {
      if (typeof window !== 'undefined' && (window as any).bootstrap) {
        const triggerEl = e.currentTarget;
        const tab = new (window as any).bootstrap.Tab(triggerEl);
        tab.show();
      }
    }
  }

  return (
    <li className={`nav-item ${classes}`} id={`li-${id}`} role="presentation">
      {href
        ? <a className={`nav-link ${activeClass}`} href={href}>
            {label}
          </a>
        : <button
            id={id}
            className={`nav-link ${activeClass}`} 
            data-bs-toggle="tab" 
            data-bs-target={`#${id}-pane`} 
            type="button" 
            role="tab"
            aria-controls={`${id}-pane`} 
            aria-selected={active}
            onClick={handleClick}
          >
            {label}
          </button>
      }
    </li>
  );
};

export default Item;
