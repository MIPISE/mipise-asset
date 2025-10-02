import React, { Fragment, ReactElement, ReactNode, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import { GlobalProps } from "../types";
import tinycolor from "tinycolor2";
import { ActiveShape } from "recharts/types/util/types";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

export const generateColors = (base: string, count: number): string[] => {
  const colors: string[] = [];
  const baseColor = tinycolor(base);

  for (let i = 0; i < count; i++) {
    // variation progressive de luminosité
    const variation = (i - count / 2) * (20 / count);
    const color = baseColor.clone().lighten(variation).toHexString();
    colors.push(color);
  }
  return colors;
};

export type CustomPieChartProps = GlobalProps & {
  attributes: {
    name: string
    label: string
  }[]
  heightChart: number
  widthChart: number
  filter?: boolean
  chartSectorColor?: string
}

export const getItems = (children: ReactNode, attributes: string[]) => {
  return (children as ReactElement[])
    .filter(c => typeof c != "string")
    .map(c => {
      const item: { name: string, [k: string]: number | string } = {
        name: c.props["data-name"]
      };

      Object.entries(c.props).forEach(([k, v]) => {
        const propName = k.replace("data-", "");
        if (!attributes.includes(propName))
          return;

        item[propName] = parseFloat(v);
      });

      return item;
    });
}

const CustomPieChart: React.FC<CustomPieChartProps> = ({
  attributes,
  children,
  chartSectorColor,
  heightChart,
  widthChart,
  classes = "",
  filter
}) => {
  const [activeFilter, setActiveFilter] = useState(attributes[0].name);
  const handleFilterClick = (key: string) => {
    setActiveFilter(key);
  }

  const renderActiveShape: ActiveShape<PieSectorDataItem> = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  }: PieSectorDataItem) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * (midAngle ?? 1));
    const cos = Math.cos(-RADIAN * (midAngle ?? 1));
    const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
    const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
    const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
    const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    let boxTextY = ey;

    const date = Date.now();
    return (
      <>
        <g>
          <text x={cx} y={cy} dy={24} textAnchor="middle" fill={fill}>
            <tspan textAnchor="middle" x={cx} y={cy}> {activeSector.name} : {payload[activeFilter]}€</tspan>
          </text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={(outerRadius ?? 0) + 6}
            outerRadius={(outerRadius ?? 0) + 10}
            fill={fill}
          />
        </g>
      </>
    );
  };

  const keys = attributes.map(a => a.name);
  const items = getItems(children, keys);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeSector = activeIndex !== null ? items[activeIndex] : null;

  const COLORS = generateColors(chartSectorColor || "#000", items.length);

  return (
    <>
      {filter &&
        <div id="dropdown-chart" className="dropdown d-flex justify-content-center">
          <button
            className="btn btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {attributes.find(a => a.name === activeFilter)?.label}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {attributes.map(a => (
              <li key={`filter-${a.name}`}>
                <button
                  className={`dropdown-item ${activeFilter === a.name ? "active" : ""}`}
                  onClick={() => handleFilterClick(a.name)}
                >
                  {a.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      }
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeShape={renderActiveShape}
              data={items}
              cx="50%"
              cy="80%"
              outerRadius={240}
              startAngle={0}
              endAngle={180}
              fill="#8884d8"
              dataKey={activeFilter}
              activeIndex={activeIndex}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {items.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {activeSector && (
          <div
            className="legend-box"
          >
            <strong>{activeSector.name}</strong>
            {attributes.map((a) => (
              <div key={`${a.label}_${activeSector.name}`} className="legend-item">
                <span className="label">{a.label} :</span>
                <span className="value">{activeSector[a.name]}€</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
};

export default CustomPieChart;
