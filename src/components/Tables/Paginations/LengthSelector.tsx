import React, {ChangeEvent} from "react";
import {GlobalProps} from "../../types";

type LengthSelectorProps = GlobalProps & {
  currentPage: number
  link: string
  param: string
  pageParam: string
  selectedValue: number
  options?: number[]
}

const LengthSelector: React.FC<LengthSelectorProps> = ({
  currentPage,
  link,
  param,
  pageParam,
  selectedValue,
  options = [10, 25, 50, 100],
  children,
  classes = "",
  ...props
}) => {
  const handleLengthChoice = (evt: ChangeEvent<HTMLSelectElement>) => {
    return window.location.href = `${link}?${pageParam}=${currentPage}&${param}=${evt.target.value}`;
  }

  return (
    <label>
      <select key={`${param}_length_selector`} className="form-select form-select-sm" onChange={handleLengthChoice} {...props} defaultValue={selectedValue}>
        {options.map(option => {
          return <option>{option}</option>
        })}
      </select>
    </label>
  )
};

export default LengthSelector;
