"use client";

import CommonHeader from "../common/header/CommonHeader";
import CommonBorder from "../common/custom/CommonBorder";
import CommonButton from "../common/button/CommonButton";

export default function Activity() {
  const activities = [
    {
      title: "Logged meal",
      description: "Chicken salad",
      date: "2025-10-08",
    },
    {
      title: "Completed workout",
      description: "30 min cardio",
      date: "2025-10-07",
    },
    {
      title: "Uploaded lab report",
      description: "Blood test results",
      date: "2025-10-06",
    },
    {
      title: "Connected smartwatch",
      description: "Apple Watch synced",
      date: "2025-10-05",
    },
  ];

  return (
    <div className="">
      <div className="space-y-3">
        <CommonHeader size="sm">Recent Activity</CommonHeader>
        {activities.map((item, index) => (
          <CommonBorder
            key={index}
            className="flex justify-between items-center"
          >
            <div className=" space-y-1.5">
              <CommonHeader size="md" className="">
                {item.title}
              </CommonHeader>
              <CommonHeader size="sm" className="text-[#717182]">
                {item.description}
              </CommonHeader>
            </div>
            <div className="text-right">
              <CommonButton variant="secondary" className="">
                {item.date}
              </CommonButton>
            </div>
          </CommonBorder>
        ))}
      </div>
    </div>
  );
}
