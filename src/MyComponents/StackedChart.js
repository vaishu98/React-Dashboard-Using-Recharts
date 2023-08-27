import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '2017',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '2018',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '2019',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '2020',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '2021',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '2022',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '2023',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function StackedChart() {

    return (
        <>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area name='Tampa' type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area name='Ocala' type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area name='Gainesville' type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
            <div style={{ marginLeft: "100px" }}>
                <ul class="legend">
                    <li><span class="tampa"></span> Tampa</li>
                    <li><span class="ocala"></span>Ocala</li>
                    <li><span class="gainesville"></span>Gainesville</li>
                </ul>
            </div>
        </>
    );
}
