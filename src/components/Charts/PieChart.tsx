import React, { ReactElement } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import {GlobalProps} from "../types";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export type MyChartProps = GlobalProps & {
  widthChart: number,
  heightChart: number
}

const MyChart: React.FC<MyChartProps>
  = ({ widthChart, heightChart, ...props }) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={widthChart} height={heightChart} data={data} {...props}>
          <Pie 
            data={data}
            cx={250}
            cy={250}
            innerRadius={100}
            outerRadius={200}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
      </PieChart>
    </ResponsiveContainer>
    );
  };

export default MyChart;