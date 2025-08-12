import React, { ReactElement } from "react";
import {Color, GlobalProps, Size} from "../types";
import CircleBadge from "../Badges/CircleBadge";

export type KpiCardProps = GlobalProps & {
  title: ReactElement[] | string,
  legend: ReactElement[] | string,
  background: Color,
  borderColor: Color,
}

const KpiCards: React.FC<KpiCardProps>
  = ({ background, legend, title, borderColor, ...props }) => {
    const classes = `card bg-${background} border-start-${borderColor} ${props.classes}`;

    return (
      <div className={classes}>
        <div className="card-body">
          <div className="row align-items-center no-gutters">
            <div className="col me-2">
              <div>
                {legend && <span className='text-primary-primary fw-medium mb-1'>{legend}</span>}<CircleBadge size={Size.SMALL} color={Color.PRIMARY} children={""} />
              </div>
              <div>
                {title && <span className="text-dark fw-semibold h3 mb-0">{title}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default KpiCards;
