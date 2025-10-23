// app/health-alerts/page.tsx
"use client";

import { FiActivity } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";

export default function HealthAlert() {
  const alerts = [
    {
      icon: <FaRegHeart className="text-[#FB2C36] w-4 h-4" />,
      title: "High heart rate detected for user John Doe",
      description: "Reached 142 bpm during rest - 2 hours ago",
      bgColor: "bg-[#FEF2F2]",
    },
    {
      icon: <MdOutlineDarkMode className="text-[#D08700] w-4 h-4" />,
      title: "Poor sleep quality for Sarah Smith",
      description: "Only 4.2 hours of sleep last night",
      bgColor: "bg-[#FEFCE8]",
    },
    {
      icon: <FiActivity className=" text-[#2B7FFF] w-4 h-4" />,
      title: "Unusual activity pattern for Mike Johnson",
      description: "No activity recorded for 3 consecutive days",
      bgColor: "bg-[#EFF6FF]",
    },
  ];

  return (
    <CommonBorder>
      <CommonHeader size="md" className="pb-7.5">
        Health Alerts & Anomalies
      </CommonHeader>

      <div className=" space-y-3">
        {alerts.map((alert, index) => (
          <CommonBorder
            key={index}
            size="sm"
            className={`flex items-start  ${alert.bgColor}  gap-3 }`}
          >
            <span className={`text-3xl pt-1  `}>{alert.icon}</span>
            <div>
              <CommonHeader size="sm" className={` `}>
                {alert.title}
              </CommonHeader>
              <CommonHeader size="xs" className="">
                {alert.description}
              </CommonHeader>
            </div>
          </CommonBorder>
        ))}
      </div>
    </CommonBorder>
  );
}
