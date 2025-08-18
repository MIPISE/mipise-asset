import React from "react";
import {Color, GlobalProps, Size} from "../types";
import Icon from "../Icon";
import {Icons} from "../icons";
import InputItem from "../Inputs/InputItem";
import IconButton from "../Buttons/IconButton";
import OffCanvas, {OffCanvasProps} from "../OffCanvas";

type SearchProps = GlobalProps & {
  advancedSearch?: OffCanvasProps
}

const Search: React.FC<SearchProps> = ({
  advancedSearch,
  children,
  classes = "",
  ...props
}) => {
  return (
    <>
      <div className="input-group input-group-sm">
        <span className="input-group-text">
          <Icon icon={Icons.SEARCH}></Icon>
        </span>
        <InputItem attribute={"search"} type={"text"} placeholder={"Rechercher"}></InputItem>
        {advancedSearch &&
            <>
                <IconButton color={Color.LIGHT} size={Size.SMALL} icon={Icons.SETTINGS_SLIDERS} iconEnd={false}
                            rounded={"end"} buttonType={"button"} visuallyHidden={true}
                            data-bs-toggle={"offcanvas"} data-bs-target={`#${advancedSearch.id}`} aria-controls={advancedSearch.id}>
                  {advancedSearch.title}
                </IconButton>
            </>
        }
      </div>
      {advancedSearch &&
        <OffCanvas {...advancedSearch}>
          {children}
        </OffCanvas>
      }
    </>
  )
}

export default Search;
