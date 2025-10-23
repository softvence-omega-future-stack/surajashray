import DashBoardCard from "../reuseable/DashBoardCard";

const cardData = [
  {
    title: "Active Nudges",
    value: `4`,
  },
  {
    title: "Total Sent Today",
    value: `2,213`,
  },
  {
    title: "Completion Rate",
    value: `75%`,
  },
  {
    title: "Avg Response Time",
    value: `12m`,
  },
];
const WellnessCardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((stat, idx) => (
        <DashBoardCard key={idx} data={stat} />
      ))}
    </div>
  );
};

export default WellnessCardSection;
