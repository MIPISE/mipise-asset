import React, {ReactElement, ReactNode, useState} from "react";
import {Cell, Pie, PieChart, ResponsiveContainer, Sector} from "recharts";
import { GlobalProps } from "../types";
import {ActiveShape} from "recharts/types/util/types";
import {PieSectorDataItem} from "recharts/types/polar/Pie";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export type CustomPieChartProps = GlobalProps & {
  attributes: {
    name: string
    label: string
  }[]
  heightChart: number
  widthChart: number
  filter?: boolean
}

export const getItems = (children: ReactNode, attributes: string[])=> {
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
  heightChart,
  widthChart,
  classes = "",
  filter
}) => {
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

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          <tspan textAnchor="middle" x={cx} dy={8}>{payload.name}</tspan>
          <tspan textAnchor="middle" x={cx} dy={25}>{payload.value}</tspan>
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
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={boxTextY} fill="#333">
          <tspan x={ex + (cos >= 0 ? 1 : -1) * 12} textAnchor={textAnchor} y={boxTextY}>{payload.name}</tspan>
          {attributes.map((a, i) => {
            boxTextY += 30;
            const title = <tspan key={`${a.label}_${payload.name}_title`} x={ex + (cos >= 0 ? 1 : -1) * 12} y={boxTextY} textAnchor={textAnchor} fill="#333">{a.label}</tspan>;
            boxTextY += 20;
            const value = <tspan key={`${a.label}_${payload.name}_title`} x={ex + (cos >= 0 ? 1 : -1) * 12} y={boxTextY} textAnchor={textAnchor} fill="#333">{`${payload.item[a.name]}€`}</tspan>;

            return (
              <>
                {title}
                {value}
              </>
            );
          })}
        </text>
      </g>
    );
  };

  const keys = attributes.map(a => a.name);
  const items = getItems(children, keys);

  const [activeFilter, setActiveFilter] = useState(attributes[0].name);
  const mapItemsWithFilter = () => {
    return items.map(i => {
      return {name: i.name, value: i[activeFilter], item: i}
    })
  }

  const [data, setData] = useState<{name: string, value: string | number}[]>(mapItemsWithFilter);
  const handleFilterClick = (key: string) => {
    console.log("click")

    setActiveFilter(key);
    setData(mapItemsWithFilter);
  }

  return (
    <>
      {filter &&
        <div className="d-flex flex-column">
          <h2>Filtrer par</h2>
          {attributes.map(a => {
            return <button key={`filter-${a.name}`} className={`btn mt-1 btn-info ${activeFilter == a.name ? "text-danger" : "text-light"}`} onClick={() => handleFilterClick(a.name)}>{a.label}</button>
          })}
        </div>
      }
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={120}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomPieChart;
