import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
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
        name: 'Mon',
        pv: 78,
        uv: 63,
        amt: 2400,
    },
    {
        name: 'Tue',
        pv: 79,
        uv: 64,
        amt: 2210,
    },
    {
        name: 'Wed',
        pv: 122,
        uv: 61,
        amt: 2290,
    },
    {
        name: 'Thu',
        pv: 79,
        uv: 69,
        amt: 2000,
    },
    {
        name: 'Fri',
        pv: 73,
        uv: 70,
        amt: 2181,
    },
    {
        name: 'Sat',
        pv: 75,
        uv: 65,
        amt: 2500,
    },
    {
        name: 'Sun',
        pv: 77,
        uv: 68,
        amt: 2100,
    },
];

export default function LineChart2() {

    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 50,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="Wed" stroke="red" label="Max Rainfall" />
            <ReferenceLine y={9800} label="Max" stroke="red" />
            <Line name='Rainfall' type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line name='Temperature' type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    );
}
