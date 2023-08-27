import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '12 AM',
        uv: 81,
        pv: 67,
        amt: 2400,
    },
    {
        name: '1 AM',
        uv: 82,
        pv: 68,
        amt: 2210,
    },
    {
        name: '2 AM',
        uv: 90,
        pv: 70,
        amt: 2290,
    },
    {
        name: '3 AM',
        uv: 85,
        pv: 70,
        amt: 2000,
    },
    {
        name: '4 AM',
        uv: 83,
        pv: 72,
        amt: 2181,
    },
    {
        name: '5 AM',
        uv: 81,
        pv: 73,
        amt: 2500,
    },
    {
        name: '6 AM',
        uv: 79,
        pv: 75,
        amt: 2100,
    },
];

export default function MyLineChart() {

    return (
        <LineChart
            width={500}
            height={300}
            data={data}
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
            <Line name='Temperature' type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line name='Humidity' type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    );
}
