import { TrendingUp } from "lucide-react";
import { FiMessageSquare } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import DashBoardCard from "../reuseable/DashBoardCard";

const cardData = [
  {
    title: "Total Conversations",
    value: `12,543`,
    icon: <FiMessageSquare />,
  },
  {
    title: "Active Users",
    value: `25`,
    icon: <LuUsers />,
  },
  {
    title: "Avg Response Time",
    value: `18`,
    icon: <GoClock />,
  },
  {
    title: "Satisfaction Rate",
    value: `57`,
    icon: <TrendingUp className=" " />,
  },
];
const ChatCartSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((stat, idx) => (
        <DashBoardCard key={idx} data={stat} />
      ))}
    </div>
  );
};

export default ChatCartSection;
