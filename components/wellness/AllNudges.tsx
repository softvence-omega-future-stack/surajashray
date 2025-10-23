import image1 from "@/public/1.svg";
import image2 from "@/public/2.svg";
import image3 from "@/public/3.svg";
import image4 from "@/public/4.svg";
import image5 from "@/public/5.svg";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
const tableData = {
  table: "min-w-full text-sm text-left text-primary py-3 px-4",
  thead: "border-b-[1.73px] border-border !font-normal px-4 py-3",
  tbody: "border-b-[1.73px] border-border last:border-0",
  td: "py-3 px-4",
};
const tableHeaders = [
  "Nudge",
  "Category",
  "Frequency",
  "Status",
  "Sent Today",
  "Actions",
];

export interface NudgeModalProps {
  openModal: () => void;
}
const AllNudges: React.FC<NudgeModalProps> = ({ openModal }) => {
  const nudges = [
    {
      nudge: "Hydration Reminder",
      description: "Time to drink some water! Stay hydrated.",
      category: "Hydration",
      frequency: "Every 2 hours",
      status: "Active",
      sentToday: 1247,
    },
    {
      nudge: "Movement Break",
      description: "Take a 5-minute walk to stay active.",
      category: "Movement",
      frequency: "Every 3 hours",
      status: "Active",
      sentToday: 892,
    },
    {
      nudge: "Mindfulness Moment",
      description: "Take 3 deep breaths and relax.",
      category: "Mindfulness",
      frequency: "Twice daily",
      status: "Active",
      sentToday: 634,
    },
    {
      nudge: "Posture Check",
      description: "Check your posture. Sit up straight!",
      category: "Posture",
      frequency: "Every hour",
      status: "Inactive",
      sentToday: 0,
    },
    {
      nudge: "Sleep Preparation",
      description: "Wind down time. Put away screens.",
      category: "Sleep",
      frequency: "Daily at 9 PM",
      status: "Active",
      sentToday: 423,
    },
  ];

  return (
    <CommonBorder>
      <CommonHeader size="md" className=" pb-7.5">
        All Nudges
      </CommonHeader>
      <div className="overflow-x-auto">
        <table className={tableData.table}>
          <thead>
            <tr className="">
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className={` ${tableData.thead}  !font-normal ${
                    header === "Actions" ? "text-center" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {nudges.map((nudge, index) => (
              <tr key={index} className={tableData.tbody}>
                <td className="p-2 flex items-start">
                  <span className="w-5 h-5 mr-2">
                    {nudge.category === "Hydration" && (
                      <Image
                        src={image1}
                        width={20}
                        height={20}
                        alt="Hydration"
                      />
                    )}
                    {nudge.category === "Movement" && (
                      <Image
                        src={image2}
                        width={20}
                        height={20}
                        alt="Hydration"
                      />
                    )}
                    {nudge.category === "Mindfulness" && (
                      <Image
                        src={image3}
                        width={20}
                        height={20}
                        alt="Hydration"
                      />
                    )}
                    {nudge.category === "Posture" && (
                      <Image
                        src={image4}
                        width={20}
                        height={20}
                        alt="Hydration"
                      />
                    )}
                    {nudge.category === "Sleep" && (
                      <Image
                        src={image5}
                        width={20}
                        height={20}
                        alt="Hydration"
                      />
                    )}
                  </span>
                  <div>
                    <p className="font-medium">{nudge.nudge}</p>
                    <p className="text-sm text-gray-500">{nudge.description}</p>
                  </div>
                </td>
                <td className={tableData.td}>
                  <CommonButton size="sm" variant="secondary">
                    {nudge.category}
                  </CommonButton>
                </td>
                <td className={tableData.td}>{nudge.frequency}</td>
                <td className={tableData.td}>
                  <CommonButton
                    size="xs"
                    variant="small"
                    className={` ${nudge.status === "Active" ? "!bg-[#030213] !text-white" : "!bg-[#ECEEF2]"}`}
                  >
                    {nudge.status}
                  </CommonButton>
                </td>
                <td className={tableData.td}>{nudge.sentToday}</td>
                <td className=" flex justify-center space-x-4">
                  <span onClick={openModal}>
                    <FiEdit className="w-4 h-4  cursor-pointer" />
                  </span>
                  <span className="text-[#D4183D]">
                    <RiDeleteBinLine className="w-4 h-4 cursor-pointer" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CommonBorder>
  );
};

export default AllNudges;
