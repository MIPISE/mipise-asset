import React from "react";
import {GlobalProps} from "../types";

export type CellProps = GlobalProps & {
  colspan?: number
  action?: boolean
}

type TableProps = GlobalProps & {
  actions?: boolean
  borderLess?: boolean
  flush?: boolean
  headNoBorder?: boolean
  hover?: boolean
  noWrap?: boolean
  responsive?: boolean
  swatches?: boolean
  tableClasses?: string
}

const Table: React.FC<TableProps> = ({
  actions,
  borderLess,
  children,
  classes = "",
  flush,
  headNoBorder,
  hover,
  noWrap,
  responsive,
  swatches,
  tableClasses = "",
  ...props
}) => {
  const divClasses = `${responsive ? "table-responsive" : ""} ${actions ? "table-actions" : ""} ${classes}`;
  const tableCompleteClasses = `table${hover ? " table-hover" : ""}${headNoBorder ? " table-head-noborder" : ""}${swatches ? " table-swatches" : ""}${flush ? " table-flush" : ""}${swatches ? " table-swatches" : ""}${borderLess ? " table-borderless" : ""}${noWrap ? " table-nowrap" : ""} ${tableClasses}`;

  return (
    <div className={divClasses}>
      <table className={tableCompleteClasses} {...props}>
        {children}
      </table>
    </div>
  )
};

export default Table;
