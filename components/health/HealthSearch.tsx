"use client";
import React, { useState } from "react";
import CommonSelect from "../common/custom/CommonSelect";
const userOptions = [
  { label: "John Doe", value: "john-doe" },
  { label: "Sarah Smith", value: "sarah-smith" },
  { label: "Michael Johnson", value: "michael-johnson" },
  { label: "Emily Brown", value: "emily-brown" },
  { label: "David Lee", value: "david-lee" },
  { label: "Sophia Wilson", value: "sophia-wilson" },
  { label: "James Taylor", value: "james-taylor" },
  { label: "Olivia Davis", value: "olivia-davis" },
  { label: "Ethan Martinez", value: "ethan-martinez" },
  { label: "Ava Anderson", value: "ava-anderson" },
] as const;

const timePeriodOptions = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Biweekly", value: "biweekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Semiannually", value: "semiannually" },
  { label: "Annually", value: "annually" },
  { label: "Every 2 Years", value: "biennial" },
  { label: "Every 5 Years", value: "quinquennial" },
  { label: "One-Time", value: "one-time" },
] as const;
const HealthSearch = () => {
  const [status, setStatus] =
    useState<(typeof userOptions)[number]["value"]>("john-doe");

  const [period, setPeriod] =
    useState<(typeof timePeriodOptions)[number]["value"]>("weekly");

  return (
    <div className="flex gap-4">
      <CommonSelect
        value={status}
        item={userOptions}
        onValueChange={setStatus}
        w={180}
      />
      <CommonSelect
        value={period}
        item={timePeriodOptions}
        onValueChange={setPeriod}
      />
    </div>
  );
};

export default HealthSearch;
