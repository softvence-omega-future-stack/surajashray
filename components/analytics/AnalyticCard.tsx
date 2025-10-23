import { TrendingUp } from "lucide-react";
import { FiActivity } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";
import DashBoardCard from "../reuseable/DashBoardCard";

const cardData = [
  {
    title: "Total Users",
    value: `12,324`,
    icon: <LuUsers />,
    trend: {
      percentage: `2.5%`,
      isPositive: true,
    },
  },
  {
    title: "Daily Active Users",
    value: `3,847`,
    icon: <FiActivity />,
    trend: {
      percentage: "12.5%",
      isPositive: true,
      isGray: true,
    },
  },
  {
    title: "Engagement Rate",
    value: `72%`,
    icon: <TrendingUp />,
    trend: {
      percentage: "5.2%",
      isPositive: true,
      isGray: true,
    },
  },
  {
    title: "Retention",
    value: `47%`,

    icon: <HiOutlineDocumentReport />,
    trend: {
      percentage: "2.1%",
      isPositive: false,
      isGray: true,
    },
  },
];
const AnalyticCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((stat, idx) => (
        <DashBoardCard key={idx} data={stat} />
      ))}
    </div>
  );
};

export default AnalyticCard;
