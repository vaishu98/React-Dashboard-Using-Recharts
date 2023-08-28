import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { index: 10000, red: 1643, blue: 790 },
    { index: 1666, red: 182, blue: 42 },
    { index: 625, red: 56, blue: 11 },
    { index: 300, redLine: 0 },
    { index: 10000, redLine: 1522 },
    { index: 600, blueLine: 0 },
    { index: 10000, blueLine: 678 },
];

export default function BestFit() {

    return (
        <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />

            <XAxis dataKey="index" type="number" label={{ value: 'Volume', position: 'insideBottomRight', offset: 0, dy: 14 }} />
            <YAxis unit="ms" type="number" label={{ value: 'Temperature', angle: -90, position: 'center', dx: -40 }} />
            <Scatter name="Temperature" dataKey="red" fill="red" />
            <Scatter name="Volume" dataKey="blue" fill="blue" />
            <Line dataKey="blueLine" stroke="blue" dot={false} activeDot={false} legendType="none" />
            <Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" />
        </ComposedChart>
    );
}