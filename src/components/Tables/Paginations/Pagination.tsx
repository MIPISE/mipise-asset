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
  const safePageCount = Math.max(1, pageCount);
  const safePage = Math.min(Math.max(page, 1), safePageCount);

  const isFirst = safePage == 1;
  const isLast = safePage == safePageCount;

  const createPagesButton = () => {
    const pages: ReactElement[] = [];

    if (safePageCount > 5 && safePage != 1) {
      pages.push(
        <li className="page-item disabled gap">
          <p className="page-link">...</p>
        </li>
      );
    }

    const start = safePage + 4 < safePageCount ? safePage : (safePageCount - 4);
    const firstPage = Math.max(1, start);
    const lastPage = Math.min(safePage + 4, safePageCount);

    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(
        <li className={`page-item${i == safePage ? " active" : ""}`} aria-current={i == safePage ? "page" : null}>
          <a className="page-link" href={`${link}?${perParam}=${currentPer}&${param}=${i}`}>{i}</a>
        </li>
      );
    }

    if (safePageCount > 5 && safePage + 4 < safePageCount) {
      pages.push(
        <li className="page-item disabled gap">
          <p className="page-link">...</p>
        </li>
      );
    }

    return pages;
  };

  const prevPage = Math.max(1, safePage - 1);
  const nextPage = Math.min(safePageCount, safePage + 1);

  return (
    <nav className={`table-pagination ms-md-auto ${classes}`} {...props}>
      <ul className="pagination pagination-sm">
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <a className="page-link" href={`${link}?${param}=1`} aria-label="First">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className={`page-item${isFirst ? " disabled" : ""}`}>
          <a className="page-link" aria-label="Previous" href={`${link}?${param}=${prevPage}`}>
            <span aria-hidden="true">&lsaquo;</span>
          </a>
        </li>
        {createPagesButton()}
        <li className={`page-item${isLast ? " disabled" : ""}`}>
          <a className="page-link" aria-label="Next" href={`${link}?${param}=${nextPage}`}>
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </li>
        <li className={`page-item${isLast ? " disabled" : ""}`}>
          <a className="page-link" aria-label="Last" href={`${link}?${param}=${safePageCount}`}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
