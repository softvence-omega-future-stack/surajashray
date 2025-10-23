"use client";
import { useState } from "react";
import { CiImport } from "react-icons/ci";
import ButtonWithIcon from "../common/button/ButtonWithIcon";
import CommonSelect from "../common/custom/CommonSelect";
import DashboardTopSection from "../reuseable/DashboardTopSection";
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
const AnalyticTopSection = () => {
  const [filter, setFilter] =
    useState<(typeof timePeriodOptions)[number]["value"]>("monthly");
  return (
    <div className="flex justify-between">
      <DashboardTopSection
        title="Analytics"
        description="Insights and metrics across the platform"
      />
      <div className="flex items-start gap-2 ">
        <CommonSelect
          value={filter}
          onValueChange={(val) => setFilter(val)}
          item={timePeriodOptions}
          w={150}
        />

        <ButtonWithIcon icon={CiImport} className="">
          Export
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default AnalyticTopSection;
