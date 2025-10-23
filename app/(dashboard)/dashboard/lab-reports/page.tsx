import CommonSpace from "@/components/common/space/CommonSpace";
import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";
import LabCardSection from "@/components/report/LabCardSection";
import LabReport from "@/components/report/LabReport";
import DashboardSearch from "@/components/reuseable/DashboardSearch";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardSearch />
      <CommonSpace>
        <LabCardSection />
      </CommonSpace>
      <CommonSpaceBottom>
        <LabReport />
      </CommonSpaceBottom>
    </div>
  );
};

export default page;
