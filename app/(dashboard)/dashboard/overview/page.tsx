import CommonSpace from "@/components/common/space/CommonSpace";
import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";
import HealthMetricsChart from "@/components/overview/HealthMetricsChart";
import RecentActivity from "@/components/overview/RecentActivity";
import TopSectionCard from "@/components/overview/TopSectionCard";
import UserGrowthChart from "@/components/overview/UserGrowthChart";
import React from "react";

const page = () => {
  return (
    <div>
      <TopSectionCard />
      <CommonSpace>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <UserGrowthChart />
          <HealthMetricsChart />
        </div>
      </CommonSpace>
      <CommonSpaceBottom>
        <RecentActivity />
      </CommonSpaceBottom>
    </div>
  );
};

export default page;
