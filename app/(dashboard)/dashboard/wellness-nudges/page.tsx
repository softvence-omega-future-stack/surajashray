"use client";

import CommonSpace from "@/components/common/space/CommonSpace";
import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";
import DashboardTopSection from "@/components/reuseable/DashboardTopSection";
import AllNudges from "@/components/wellness/AllNudges";
import NudgeModal from "@/components/wellness/NudgeModal";
import WellnessCardSection from "@/components/wellness/WellnessCardSection";
import { useState } from "react";

const Page = () => {
  const [model, setModal] = useState(false);
  return (
    <div>
      <DashboardTopSection
        title="Wellness Nudges"
        description="Create and manage wellness reminders for users"
        buttonText="Create Nudge"
        action={() => setModal(true)}
      />
      <CommonSpace>
        <WellnessCardSection />
      </CommonSpace>
      <CommonSpaceBottom>
        <AllNudges openModal={() => setModal(true)} />
      </CommonSpaceBottom>

      {model && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <NudgeModal closeModal={() => setModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Page;
