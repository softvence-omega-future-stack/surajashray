"use client";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import MiniTabs from "../reuseable/MiniTabs";

export default function AnalyticMapSection() {
  const userGrowthData = [
    { month: "Jan", active: 3000, total: 4500 },
    { month: "Feb", active: 3800, total: 5600 },
    { month: "Mar", active: 5200, total: 7000 },
    { month: "Apr", active: 6700, total: 8600 },
    { month: "May", active: 8200, total: 10500 },
    { month: "Jun", active: 9700, total: 12800 },
  ];

  const deviceData = [
    { name: "Apple Watch", value: 39, color: "#0088FE" },
    { name: "Fitbit", value: 28, color: "#00C49F" },
    { name: "Google Fit", value: 23, color: "#FFBB28" },
    { name: "Others", value: 9, color: "#FF8042" },
  ];

  const engagementData = [
    { day: "Mon", chats: 900, reports: 200, scans: 1500 },
    { day: "Tue", chats: 1100, reports: 300, scans: 1700 },
    { day: "Wed", chats: 1250, reports: 350, scans: 2000 },
    { day: "Thu", chats: 1000, reports: 280, scans: 1600 },
    { day: "Fri", chats: 1400, reports: 400, scans: 1900 },
    { day: "Sat", chats: 950, reports: 320, scans: 1200 },
    { day: "Sun", chats: 700, reports: 250, scans: 1100 },
  ];

  const featureUsageData = [
    { feature: "Nutrition Scanner", usage: 9500 },
    { feature: "AI Chat", usage: 8000 },
    { feature: "Health Vitals", usage: 6700 },
    { feature: "Lab Reports", usage: 4000 },
    { feature: "Wellness Nudges", usage: 5500 },
  ];

  const retentionData = [
    { week: "Week 1", retention: 100 },
    { week: "Week 2", retention: 88 },
    { week: "Week 3", retention: 77 },
    { week: "Week 4", retention: 65 },
    { week: "Week 8", retention: 55 },
    { week: "Week 12", retention: 45 },
  ];

  // Tab content definitions
  const tabs = [
    {
      label: "User Growth",
      value: "User Growth",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CommonBorder>
            <CommonHeader className="pb-7.5">User Growth Trend</CommonHeader>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="active"
                  stroke="#00C49F"
                  fill="url(#colorActive)"
                  name="Active Users"
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#8884d8"
                  fill="url(#colorTotal)"
                  name="Total Users"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CommonBorder>

          <CommonBorder>
            <CommonHeader className="pb-7.5">Device Distribution</CommonHeader>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CommonBorder>
        </div>
      ),
    },
    {
      label: "Engagement",
      value: "Engagement",
      content: (
        <CommonBorder>
          <CommonHeader className="pb-7.5">
            Daily Engagement Metrics
          </CommonHeader>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="chats"
                stroke="#00C49F"
                name="AI Chats"
              />
              <Line
                type="monotone"
                dataKey="reports"
                stroke="#FFBB28"
                name="Lab Reports"
              />
              <Line
                type="monotone"
                dataKey="scans"
                stroke="#8884d8"
                name="Nutrition Scans"
              />
            </LineChart>
          </ResponsiveContainer>
        </CommonBorder>
      ),
    },
    {
      label: "Feature Usage",
      value: "Feature Usage",
      content: (
        <CommonBorder>
          <CommonHeader className="pb-7.5">
            Feature Usage Statistics
          </CommonHeader>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical" data={featureUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="feature" type="category" />
              <Tooltip />
              <Bar dataKey="usage" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CommonBorder>
      ),
    },
    {
      label: "Retention",
      value: "Retention",
      content: (
        <CommonBorder>
          <CommonHeader className="pb-7.5">User Retention Cohort</CommonHeader>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={retentionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="retention" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CommonBorder>
      ),
    },
  ];

  return (
    <div>
      <MiniTabs tabs={tabs} defaultValue="User Growth" />
    </div>
  );
}
