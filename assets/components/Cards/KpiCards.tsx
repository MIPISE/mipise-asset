import React, { ReactElement } from "react";
import { Colors, Size } from "../types";
import CircleBadges from "../Badges/CircleBadges";

export type KpiCardProps = {
  title: ReactElement[] | string,
  legend: ReactElement[] | string,
  background: Colors,
  borderColors: Colors,
}

const KpiCards: React.FC<KpiCardProps>
  = ({ background, legend, title, borderColors }) => {
    const classes = `card bg-${background} border-start-${borderColors}`;

    return (
      <div className={classes}>
        <div className="card-body">
          <div className="row align-items-center no-gutters">
            <div className="col me-2">
              <div>
                {legend && <span className='text-primary-primary fw-medium mb-1'>{legend}</span>}<CircleBadges size={Size.SMALL} color={Colors.PRIMARY} children={""} />
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