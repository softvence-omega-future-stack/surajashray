import AnalyticCard from "@/components/analytics/AnalyticCard";
import AnalyticMapSection from "@/components/analytics/AnalyticMapSection";
import AnalyticTopSection from "@/components/analytics/AnalyticTopSection";
import CommonSpace from "@/components/common/space/CommonSpace";
import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";

const page = () => {
  return (
    <div>
      <AnalyticTopSection />
      <CommonSpace>
        <AnalyticCard />
      </CommonSpace>
      <CommonSpaceBottom>
        <AnalyticMapSection />
      </CommonSpaceBottom>
    </div>
  );
};

export default page;
