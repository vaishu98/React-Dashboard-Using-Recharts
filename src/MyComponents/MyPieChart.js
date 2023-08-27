import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
export default function MyPieChart({ data }) {

    return (
        <>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimation Active={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
            <p style={{ color: "#8884d8", fontWeight: "bold" }}>Number of Impressions across various social media websites</p>
        </>
    )
}
