import { Legend } from 'chart.js';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function MyPieChart2({ data }) {

    return (
        <><p style={{ color: "#8884d8", fontWeight: "bold" }}>Distribution of digital footprint</p>
            <div style={{ alignContent: "center", marginLeft: "150px" }}>


                <PieChart width={200} height={200}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>


            </div>
            <div style={{ marginLeft: "100px" }}>
                <ul class="legend">
                    <li><span class="superawesome"></span> Impressive - 200000</li>
                    <li><span class="awesome"></span> Awesome - 150000</li>
                    <li></li>
                    <li><span class="kindaawesome"></span> Great - 100000</li>
                    <li><span class="notawesome"></span> Poor - 50000</li>
                </ul>
            </div>
        </>
    );
}
