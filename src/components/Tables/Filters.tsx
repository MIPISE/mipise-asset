import React from "react";
import { Direction, GlobalProps, Size } from "../types";
import Dropdown from "../Dropdowns/Dropdown";

type FiltersProps = GlobalProps & {
  applyText?: string
  resetText?: string
}

const Filters: React.FC<FiltersProps> = ({
  applyText,
  children,
  classes = "",
  resetText,
  ...props
}) => {
  return (
    <Dropdown title={"Filtrer"} customMenu={true} size={Size.SMALL} fullWidth={false} direction={Direction.DOWN} classes="ms-auto">
      <form className="dropdown-menu dropdown-menu-md max-vh-80 overflow-y-auto" aria-labelledby="filterMenu" role="combobox">
        <div className="dropdown-body p-3">
          {children}
        </div>
        {applyText && resetText &&
          <div className="dropdown-footer d-flex justify-content-end gap-1 p-3 border-top">
            <a className="btn btn-primary-link" role="button">{resetText}</a>
            <button className="btn btn-primary" type="submit">{applyText}</button>
          </div>
        }
      </form>
    </Dropdown>
  );
}

export default Filters;
