import DashBoardCard from "../reuseable/DashBoardCard";

const cardData = [
  {
    title: "Total Reports",
    value: `12,543`,
  },
  {
    title: "Pending Analysis",
    value: `25`,

    valueColor: "!text-[#D08700]",
  },
  {
    title: "High Priority",
    value: `18`,
    valueColor: "!text-[#E7000B]",
  },
  {
    title: "Analyzed Today",
    value: `57`,
    valueColor: "!text-[#00A63E]",
  },
];
const LabCardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((stat, idx) => (
        <DashBoardCard key={idx} data={stat} />
      ))}
    </div>
  );
};

export default LabCardSection;
