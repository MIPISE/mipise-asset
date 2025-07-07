import React, { ReactElement } from "react";
import { Colors, Size } from "../types";

export type ItemDropdown = {
  data: ReactElement[] | string,
}

const ItemDropdown: React.FC<ItemDropdown>
  = ({ data, ...props }) => {

    return (
      <li>
        <a
          className="dropdown-item" href="#" type="button" aria-label="">{data}
        </a>
      </li>
    );
  };

export default ItemDropdown;
