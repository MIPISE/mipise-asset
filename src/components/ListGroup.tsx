import React from "react";
import {GlobalProps} from "./types";
import ListItem, { ListItemProps } from "./ListItem";

export type ListGroupProps = GlobalProps & {
  ListItemProps: ListItemProps
}

const ListGroup: React.FC<ListGroupProps>
  = ({ ListItemProps, ...props }) => {
    return (
      <div className={`list-group list-group-rounded ${props.classes}`}>
        <ListItem {...ListItemProps} />
      </div>
    );
  };

export default ListGroup;
