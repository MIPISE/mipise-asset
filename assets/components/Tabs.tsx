import React, { ReactElement } from "react";
import TabsItem, { TabsItemProps } from "./TabsItem";

export type TabsProps = {
  TabsItemProps: TabsItemProps
}

const Tabs: React.FC<TabsProps>
  = ({ TabsItemProps }) => {

    return (
      <>
        <ul
          className="nav nav-underline overflow-x" role="tablist" aria-label="">
          <TabsItem {...TabsItemProps} />
        </ul>
      </>
    );
  };

export default Tabs;