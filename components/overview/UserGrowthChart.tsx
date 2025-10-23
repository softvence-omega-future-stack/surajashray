"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";

const data = [
  { name: "Jan", activeUsers: 3000, totalUsers: 4000 },
  { name: "Feb", activeUsers: 3400, totalUsers: 4800 },
  { name: "Mar", activeUsers: 4000, totalUsers: 6500 },
  { name: "Apr", activeUsers: 5000, totalUsers: 8200 },
  { name: "May", activeUsers: 6700, totalUsers: 10500 },
  { name: "Jun", activeUsers: 8000, totalUsers: 13000 },
];

export default function UserGrowthChart() {
  return (
    <CommonBorder className=" w-full">
      <CommonHeader size="md" className="pb-7.5">
        User Growth & Activity
      </CommonHeader>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: "10px" }} />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#34d399"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Active Users"
          />
          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Total Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </CommonBorder>
  );
}
