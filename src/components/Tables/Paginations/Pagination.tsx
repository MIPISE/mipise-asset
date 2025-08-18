import React, {ReactElement} from "react";
import {GlobalProps} from "../../types";

type PaginationProps = GlobalProps & {
  page: number
  pageCount: number
}

const Pagination: React.FC<PaginationProps> = ({
  children,
  classes = "",
  page,
  pageCount,
  ...props
}) => {
  const isFirst = page == 1;
  const isLast = page == pageCount;

  const createPagesButton = () => {
    const pages: ReactElement[] = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <li className={`page-item${i == page ? " active" : ""}`} aria-current={i == page ? "page" : null}>
          <button className="page-link">{i}</button>
        </li>
      )
    }
    return pages;
  }

  return (
    <nav className={`table-pagination ms-md-auto ${classes}`} {...props}>
      <ul className="pagination pagination-sm">
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <button className="page-link" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <button className="page-link" aria-label="Previous">
            <span aria-hidden="true">&lsaquo;</span>
          </button>
        </li>
        {createPagesButton()}
        <li className="page-item disabled gap">
          <a className="page-link" href="#">...</a>
        </li>
        <li className={`page-item${isLast ? " disabled" : ""}`}>
          <button className="page-link" aria-label="Next">
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        </li>
        <li className={`page-item${isLast ? " disabled" : ""}`}>
          <button className="page-link" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
};

export default Pagination;
