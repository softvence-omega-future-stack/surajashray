import CommonSpace from "@/components/common/space/CommonSpace";
import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";
import FoodDatabase from "@/components/nutrition/FoodDatabase";
import ScanningTends from "@/components/nutrition/ScanningTends";
import TopScannedFood from "@/components/nutrition/TopScannedFood";
import DashboardSearch from "@/components/reuseable/DashboardSearch";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardSearch />
      <CommonSpace>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
          <ScanningTends />
          <TopScannedFood />
        </div>
      </CommonSpace>
      <CommonSpaceBottom>
        <FoodDatabase />
      </CommonSpaceBottom>
    </div>
  );
};

export default page;
