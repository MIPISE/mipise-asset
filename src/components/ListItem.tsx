import React, { ReactElement } from "react";
import IconButton, { IconButtonProps } from "./Buttons/IconButton";
import IconBadge, { IconBadgeProps } from "./Badges/IconBadge";
import {GlobalProps} from "./types";

export type ListItemProps = GlobalProps & {
  label: ReactElement[] | string,
  IconBadgesProps: IconBadgeProps,
  IconButtonProps: IconButtonProps,
}

const ListItem: React.FC<ListItemProps>
  = ({ IconBadgesProps, IconButtonProps, label, ...props }) => {
    return (
      <div
        className={`list-group-item d-grid d-md-flex flex-nowrap align-items-center gap-2 ${props.classes}`}>
        <div
          className="d-flex flex-row align-items-center">
          <IconBadge classes="align-items-center justify-content-center me-2" {...IconBadgesProps} />
          <div
            className="flex-fill">{label}
          </div>
        </div>
        <IconButton classes="ms-md-auto" {...IconButtonProps} />
      </div>
    );
  };

export default ListItem;