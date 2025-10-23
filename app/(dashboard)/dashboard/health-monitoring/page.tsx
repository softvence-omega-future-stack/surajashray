import CommonSpace from "@/components/common/space/CommonSpace";
import HealthAlert from "@/components/health/HealthAlert";
import HealthMapSection from "@/components/health/HealthMapSection";
import HealthSearch from "@/components/health/HealthSearch";
import HealthTopSection from "@/components/health/HealthTopSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HealthSearch />
      <CommonSpace>
        <HealthTopSection />
      </CommonSpace>
      <HealthMapSection />
      <CommonSpace>
        <HealthAlert />
      </CommonSpace>
    </div>
  );
};

export default page;
