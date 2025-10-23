import DashBoardCard from "../reuseable/DashBoardCard";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdChatBubbleOutline } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";

const cardData = [
  {
    title: "Total Users",
    value: `12,543`,
    icon: <LuUsers />,
    trend: {
      percentage: `12.5%`,
      isPositive: true,
    },
  },
  {
    title: "Active Today",
    value: `3,847`,
    icon: <FiActivity />,
    trend: {
      percentage: "12.5%",
      isPositive: true,
    },
  },
  {
    title: "Lab Reports",
    value: `1,234`,
    icon: <HiOutlineDocumentReport />,
    trend: {
      percentage: "5.6%",
      isPositive: true,
    },
  },
  {
    title: "AI Conversations",
    value: `8,921`,

    icon: <MdChatBubbleOutline />,
    trend: {
      percentage: "2.1%",
      isPositive: false,
    },
  },
];
const TopSectionCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((stat, idx) => (
        <DashBoardCard key={idx} data={stat} />
      ))}
    </div>
  );
};

export default TopSectionCard;
