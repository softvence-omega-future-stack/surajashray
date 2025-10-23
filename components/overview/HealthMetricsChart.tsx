"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";

const data = [
  { name: "Sleep", value: 22, color: "#14b8a6" },
  { name: "Heart Rate", value: 26, color: "#3b82f6" },
  { name: "Nutrition", value: 17, color: "#f97316" },
  { name: "Steps", value: 35, color: "#facc15" },
];

export default function HealthMetricsChart() {
  return (
    <CommonBorder className=" w-full">
      <CommonHeader size="md" className="pb-7.5">
        Health Metrics Tracking
      </CommonHeader>
      <div className="flex justify-center items-center font-inter">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CommonBorder>
  );
}
