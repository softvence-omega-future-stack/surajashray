import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";
import MiniTabs from "@/components/reuseable/MiniTabs";
import AISettings from "@/components/settings/AISettings";
import General from "@/components/settings/General";
import Notifications from "@/components/settings/Notifications";
import Security from "@/components/settings/Security";

const tabs = [
  {
    label: "General",
    value: "general",

    content: <General />,
  },
  {
    label: "Notifications",
    value: "notifications",
    content: <Notifications />,
  },
  {
    label: "AI Settings",
    value: "ai-settings",
    content: <AISettings />,
  },
  {
    label: "Security",
    value: "security",
    content: <Security />,
  },
];
const page = () => {
  return (
    <CommonSpaceBottom>
      <MiniTabs tabs={tabs} />
    </CommonSpaceBottom>
  );
};

export default page;
