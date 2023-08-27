import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Aug 12',
        uv: 1.2,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Aug 13',
        uv: 1.4,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Aug 14',
        uv: -0.7,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Aug 15',
        uv: -1.2,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Aug 16',
        uv: 0.6,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Aug 17',
        uv: -1.1,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Aug 18',
        uv: 2.4,
        pv: 4300,
        amt: 2100,
    },
];

const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default function AreaFill() {

    return (
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
            <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset={off} stopColor="green" stopOpacity={1} />
                    <stop offset={off} stopColor="red" stopOpacity={1} />
                </linearGradient>
            </defs>
            <Area name='rice/fall %' type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
    );
}
