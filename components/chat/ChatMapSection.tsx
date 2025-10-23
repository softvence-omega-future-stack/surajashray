"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";

interface ConversationData {
  day: string;
  volume: number;
}

interface TopicData {
  topic: string;
  value: number;
}

export default function ChatMapSection() {
  const conversationData: ConversationData[] = [
    { day: "Mon", volume: 1100 },
    { day: "Tue", volume: 1500 },
    { day: "Wed", volume: 1750 },
    { day: "Thu", volume: 1550 },
    { day: "Fri", volume: 2000 },
    { day: "Sat", volume: 1700 },
    { day: "Sun", volume: 1100 },
  ];

  const topicData: TopicData[] = [
    { topic: "Sleep", value: 2300 },
    { topic: "Nutrition", value: 1900 },
    { topic: "Exercise", value: 1700 },
    { topic: "Stress", value: 1400 },
    { topic: "Weight Loss", value: 1200 },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      <CommonBorder>
        <CommonHeader size="md" className="pb-7.5">
          Conversation Volume
        </CommonHeader>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={conversationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="volume"
              stroke="#8884D8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CommonBorder>

      <CommonBorder>
        <CommonHeader size="md" className="pb-7.5">
          Top Discussion Topics
        </CommonHeader>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={topicData} layout="vertical" margin={{ left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="topic" type="category" />

            <Tooltip
              contentStyle={{
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
              }}
              labelStyle={{
                color: "#000",
              }}
              itemStyle={{
                color: "#000",
              }}
              cursor={{ stroke: "transparent", strokeWidth: 0 }}
            />

            <Bar
              dataKey="value"
              fill="#82CA9D"
              background={false}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </CommonBorder>
    </div>
  );
}
