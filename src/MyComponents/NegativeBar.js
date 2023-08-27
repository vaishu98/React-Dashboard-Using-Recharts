import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '-3000',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '-2000',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '-1000',
        uv: -3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '0',
        uv: -2000,
        pv: -9800,
        amt: 2290,
    },
    {
        name: '1000',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '2000',
        uv: -1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '3000',
        uv: 2390,
        pv: -3800,
        amt: 2500,
    },

];

export default function NegativeBar() {

    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            stackOffset="sign"
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar name='Temperature' dataKey="pv" fill="#8884d8" stackId="stack" />
            <Bar name='Pressure' dataKey="uv" fill="#82ca9d" stackId="stack" />
        </BarChart>
    );
}
