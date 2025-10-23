"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import MiniTabs from "../reuseable/MiniTabs";

const heartRateData = [
  { time: "00:00", avg: 60, max: 75, min: 55 },
  { time: "04:00", avg: 58, max: 65, min: 53 },
  { time: "08:00", avg: 70, max: 85, min: 63 },
  { time: "12:00", avg: 78, max: 92, min: 69 },
  { time: "16:00", avg: 75, max: 87, min: 67 },
  { time: "20:00", avg: 68, max: 78, min: 60 },
];

const sleepQualityData = [
  { day: "Mon", deep: 2.8, light: 3.2, rem: 2 },
  { day: "Tue", deep: 2.6, light: 3.5, rem: 2.1 },
  { day: "Wed", deep: 2.9, light: 3.1, rem: 2.2 },
  { day: "Thu", deep: 2.7, light: 3.3, rem: 2 },
  { day: "Fri", deep: 2.8, light: 3.4, rem: 2.1 },
  { day: "Sat", deep: 3, light: 3.3, rem: 2.2 },
  { day: "Sun", deep: 3, light: 3.2, rem: 2.3 },
];

const activityData = [
  { day: "Mon", steps: 8200 },
  { day: "Tue", steps: 10200 },
  { day: "Wed", steps: 7800 },
  { day: "Thu", steps: 12000 },
  { day: "Fri", steps: 9100 },
  { day: "Sat", steps: 15000 },
  { day: "Sun", steps: 11000 },
];

const SleepQuality = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={sleepQualityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="deep" stackId="a" fill="#818cf8" name="Deep Sleep" />
        <Bar dataKey="light" stackId="a" fill="#facc15" name="Light Sleep" />
        <Bar dataKey="rem" stackId="a" fill="#34d399" name="REM Sleep" />
      </BarChart>
    </ResponsiveContainer>
  );
};
const HeartRate = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={heartRateData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="avg"
          stroke="#6366f1"
          name="Average"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="max"
          stroke="#ef4444"
          name="Max"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
        <Line
          type="monotone"
          dataKey="min"
          stroke="#22c55e"
          name="Min"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
const Activity = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={activityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="steps"
          fill="#818cf8"
          name="Daily Steps"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default function HealthMapSection() {
  return (
    <CommonBorder>
      <CommonHeader size="md" className="pb-7.5">
        Health Metrics Overview
      </CommonHeader>

      <MiniTabs
        tabs={[
          { label: "Heart Rate", value: "Heart Rate", content: <HeartRate /> },
          {
            label: "Sleep Quality",
            value: "Sleep Quality",
            content: <SleepQuality />,
          },
          { label: "Activity", value: "Activity", content: <Activity /> },
        ]}
      />
    </CommonBorder>
  );
}
