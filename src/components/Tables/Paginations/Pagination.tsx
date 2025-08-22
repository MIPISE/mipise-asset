import React, {ReactElement} from "react";
import {GlobalProps} from "../../types";

type PaginationProps = GlobalProps & {
  currentPer: number
  link: string
  page: number
  pageCount: number
  param: string
  perParam: string
}

const Pagination: React.FC<PaginationProps> = ({
  children,
  currentPer,
  link,
  page,
  pageCount,
  param,
  perParam,
  classes = "",
  ...props
}) => {
  const isFirst = page == 1;
  const isLast = page == pageCount;

  const createPagesButton = () => {
    const pages: ReactElement[] = [];

    if (pageCount > 5 && page != 1) {
      pages.push(
        <li className="page-item disabled gap">
          <p className="page-link">...</p>
        </li>
      );
    }

    for (let i = (page + 4 < pageCount ? page : (pageCount - 4)); i <= Math.min(page + 4, pageCount); i++) {
      pages.push(
        <li className={`page-item${i == page ? " active" : ""}`} aria-current={i == page ? "page" : null}>
          <a className="page-link" href={`${link}?${perParam}=${currentPer}&${param}=${i}`}>{i}</a>
        </li>
      )
    }

    if (pageCount > 5 && page + 4 < pageCount) {
      pages.push(
        <li className="page-item disabled gap">
          <p className="page-link">...</p>
        </li>
      );
    }

    return pages;
  }

  return (
    <nav className={`table-pagination ms-md-auto ${classes}`} {...props}>
      <ul className="pagination pagination-sm">
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <a className="page-link" href={`${link}?${param}=1`} aria-label="First">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <a className="page-link" aria-label="Previous" href={`${link}?${param}=${page - 1}`}>
            <span aria-hidden="true">&lsaquo;</span>
          </a>
        </li>
        {createPagesButton()}
        <li className={`page-item${isLast ? " disabled" : ""}`}>
          <a className="page-link" aria-label="Next" href={`${link}?${param}=${page + 1}`}>
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </li>
        <li className={`page-item${isLast ? " disabled" : ""}`}>
          <a className="page-link" aria-label="Last" href={`${link}?${param}=${pageCount}`}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default Pagination;
