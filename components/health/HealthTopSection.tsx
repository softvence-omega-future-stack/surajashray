import { FaRegHeart } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { MdChatBubbleOutline, MdOutlineDarkMode } from "react-icons/md";
import DashBoardCard from "../reuseable/DashBoardCard";

const cardData = [
  {
    title: "Avg Heart Rate",
    value: `72 bpm`,
    icon: <FaRegHeart className="text-[#FB2C36] w-4 h-4" />,
    trend: {
      percentage: `2.5%`,
      isPositive: true,
    },
    isGray: true,
  },
  {
    title: "Avg Steps",
    value: `3,847`,
    icon: <FiActivity className=" text-[#2B7FFF] w-4 h-4" />,
    trend: {
      percentage: "12.5%",
      isPositive: true,
    },
    isGray: true,
  },
  {
    title: "Avg Sleep",
    value: `7.2 hrs`,
    icon: <MdOutlineDarkMode className=" text-[#AD46FF] w-4 h-4" />,
    trend: {
      percentage: "5.2%",
      isPositive: true,
    },
    isGray: true,
  },
  {
    title: "Hydration",
    value: `2.1 L`,

    icon: <MdChatBubbleOutline className=" text-[#00B8DB] h-4 w-4" />,
    trend: {
      percentage: "2.1%",
      isPositive: false,
    },
    isGray: true,
  },
];
const HealthTopSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((stat, idx) => (
        <DashBoardCard key={idx} data={stat} />
      ))}
    </div>
  );
};

export default HealthTopSection;
