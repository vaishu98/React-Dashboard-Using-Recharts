import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Chairs',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Desks',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Tables',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Lights',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Lamps',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Beds',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Sofas',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function StackedBar() {

    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 20,
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
            <Bar name='Orders' dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar name='Inventory' dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
    );

}
