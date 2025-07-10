import React, { ReactElement } from "react";
import TabsItem, { TabsItemProps } from "./TabsItem";
import {GlobalProps} from "./types";

export type TabsProps = GlobalProps & {
  TabsItemProps: TabsItemProps
}

const Tabs: React.FC<TabsProps>
  = ({ TabsItemProps, ...props }) => {

    return (
      <>
        <ul
          className={`nav nav-underline overflow-x ${props.classes}`} role="tablist" aria-label="">
          <TabsItem {...TabsItemProps} />
        </ul>
      </>
    );
  };

export default Tabs;