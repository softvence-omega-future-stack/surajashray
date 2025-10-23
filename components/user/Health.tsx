import React from "react";
import { FiHeart, FiActivity, FiTrendingUp } from "react-icons/fi";
import { LuFootprints } from "react-icons/lu";
import CommonHeader from "../common/header/CommonHeader";

const Health: React.FC = () => {
  const metrics = [
    {
      icon: (
        <div className="p-3 bg-red-50 text-red-500 rounded-full">
          <FiHeart size={20} />
        </div>
      ),
      label: "Avg Heart Rate",
      value: "72 bpm",
    },
    {
      icon: (
        <div className="p-3 bg-blue-50 text-blue-500 rounded-full">
          <LuFootprints size={20} />
        </div>
      ),
      label: "Avg Daily Steps",
      value: "8,500",
    },
    {
      icon: (
        <div className="p-3 bg-purple-50 text-purple-500 rounded-full">
          <FiActivity size={20} />
        </div>
      ),
      label: "Active Minutes/Day",
      value: "45 min",
    },
    {
      icon: (
        <div className="p-3 bg-green-50 text-green-500 rounded-full">
          <FiTrendingUp size={20} />
        </div>
      ),
      label: "Avg Sleep",
      value: "7.2 hrs",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
        >
          {item.icon}
          <div>
            <CommonHeader size="sm" className=" !text-[#717182]">
              {item.label}
            </CommonHeader>
            <CommonHeader size="xl" className=" ">
              {item.value}
            </CommonHeader>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Health;
