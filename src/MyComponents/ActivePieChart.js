import React, { useState, useCallback } from "react";
import { ResponsiveContainer, PieChart, Pie, Sector } from "recharts";

const data = [
    {
        name: "Group A",
        value: 400
    },
    {
        name: "Group B",
        value: 300
    },
    {
        name: "Group C",
        value: 300
    },
    {
        name: "Group D",
        value: 200
    },
    {
        name: "Group E",
        value: 278
    },
    {
        name: "Group F",
        value: 189
    }
];

const renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        midAngle
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius - 40) * cos;
    const sy = cy + (outerRadius - 40) * sin;
    return (
        <Sector
            cx={sx}
            cy={sy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill="red"
        />
    );
};

export default function ActivePieChart() {
    const [activeIndex, setActiveIndex] = useState(null);
    const onMouseOver = useCallback((data, index) => {
        setActiveIndex(index);
    }, []);
    const onMouseLeave = useCallback((data, index) => {
        setActiveIndex(null);
    }, []);

    return (
        <PieChart height={250} width={250}>
            <Pie
                activeIndex={activeIndex}
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                activeShape={renderActiveShape}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                label
            />
        </PieChart>
    );
}