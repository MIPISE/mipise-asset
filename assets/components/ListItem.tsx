import React, { ReactElement } from "react";
import { Colors } from "./types";
import IconeButton, { IconeButtonProps } from "./Buttons/IconeButton";
import IconeBadges, { IconeBadgesProps } from "./Badges/IconeBadges";

export type ListItemProps = {
  label: ReactElement[] | string,
  IconeBadgesProps: IconeBadgesProps,
  IconeButtonProps: IconeButtonProps,
}

const ListItem: React.FC<ListItemProps>
  = ({ IconeBadgesProps, IconeButtonProps, label }) => {
    return (
      <div
        className="list-group-item d-grid d-md-flex flex-nowrap align-items-center gap-2">
        <div
          className="d-flex flex-row align-items-center">
          <IconeBadges className="align-items-center justify-content-center me-2" {...IconeBadgesProps} />
          <div
            className="flex-fill">{label}
          </div>
        </div>
        <IconeButton className="ms-md-auto" {...IconeButtonProps} />
      </div>
    );
  };

export default ListItem;