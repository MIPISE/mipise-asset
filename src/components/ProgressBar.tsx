import React from "react";
import {Colors} from "./types";

type ProgressBarProps = {
    value: number,
    max: number,
    backgroundColor?: Colors,
    animated?: boolean,
    striped?: boolean
};

const ProgressBar: React.FC<ProgressBarProps>
  = ({ value, max, backgroundColor = Colors.PRIMARY, animated = false, striped = false}) => {
    const progressValue = Math.round(value / max * 100);

    let classes = `progress-bar bg-${backgroundColor}`;
    if (animated)
        classes += " progress-bar-animated";

    if (striped)
        classes += " progress-bar-striped";

    return (<div className={"progress progress-sm"}>
         <div className={classes} role={"progressbar"} style={{width: `${progressValue}%`}} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressValue}>
             <span className={"visually-hidden"} content={`${progressValue}% Complete`}>
             </span>
         </div>
     </div>);
};

export default ProgressBar;
