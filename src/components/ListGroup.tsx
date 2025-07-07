import React, { ReactElement } from "react";
import { Colors } from "./types";
import ListItem, { ListItemProps } from "./ListItem";

export type ListGroupProps = {
  ListItemProps: ListItemProps
}

const ListGroup: React.FC<ListGroupProps>
  = ({ ListItemProps }) => {
    return (
      <div className={`list-group list-group-rounded`}>
        <ListItem {...ListItemProps} />
      </div>
    );
  };

export default ListGroup;