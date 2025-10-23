import React from "react";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import { CiApple } from "react-icons/ci";
import CommonButton from "../common/button/CommonButton";

const topFoods = [
  { name: "Chicken Breast", scans: 1247 },
  { name: "Avocado", scans: 1102 },
  { name: "Brown Rice", scans: 982 },
  { name: "Salmon", scans: 856 },
  { name: "Broccoli", scans: 743 },
];
const TopScannedFood = () => {
  return (
    <CommonBorder className="">
      <CommonHeader size="md" className="pb-7.5">
        Top Scanned Foods
      </CommonHeader>
      <ul className="space-y-3">
        {topFoods.map((food) => (
          <li key={food.name} className="flex justify-between items-center ">
            <CommonHeader size="sm" className="flex items-center gap-2">
              <CiApple size={20} />
              {food.name}
            </CommonHeader>
            <CommonButton size="xs" variant="small" className="">
              {food.scans} scans
            </CommonButton>
          </li>
        ))}
      </ul>
    </CommonBorder>
  );
};

export default TopScannedFood;
