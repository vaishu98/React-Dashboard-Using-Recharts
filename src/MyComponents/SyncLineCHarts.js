import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Book A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Book B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Book C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Book D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Book E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Book F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Book G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function SyncLineCharts() {

    return (
        <div style={{ width: '70%' }}>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
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
                    <Line name='Sales' type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>

            <p>Year 2021</p>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
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
                    <Line name='Sales' type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                    <Brush />
                </LineChart>
            </ResponsiveContainer>
            <p>Year 2022</p>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
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
                    <Area name='Sales' type="monotone" dataKey="amt" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
            <p>Year 2023</p>
        </div>
    );
}
