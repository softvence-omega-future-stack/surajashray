import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import CommonSpace from "../common/space/CommonSpace";
import CloseButton from "../reuseable/CloseButton";
import { UserReport } from "./data";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserReport | null;
}

const metrics = [
  { label: "Cholesterol", value: "220 mg/dL" },
  { label: "HDL", value: "45 mg/dL" },
  { label: "LDL", value: "150 mg/dL" },
];
const recommendations = [
  "Consider increasing fiber intake",
  "Regular cardiovascular exercise recommended",
  "Follow-up test in 3 months",
];
const ReportModal: React.FC<Props> = ({ user, setOpenModal }) => {
  return (
    <CommonBorder shadow size="md" className=" max-w-[512px] relative">
      <div className=" w-fit ml-auto absolute top-1 right-2.5 ">
        <CloseButton close={() => setOpenModal(false)} />
      </div>

      <CommonHeader size="md" className="!text-lg !font-bold !leading-[18px]">
        Lab Report Details
      </CommonHeader>

      <CommonHeader size="sm" className="pt-2 !text-[#717182]">
        Detailed analysis
      </CommonHeader>

      <CommonSpace className=" space-y-4">
        <div className="grid grid-cols-2 gap-6 ">
          <div className="">
            <CommonHeader size="sm">User</CommonHeader>
            <CommonHeader size="sm" className=" !text-[#717182]">
              {user?.user}
            </CommonHeader>
          </div>
          <div className="">
            <CommonHeader size="sm">Report Type</CommonHeader>
            <CommonHeader size="sm" className=" !text-[#717182]">
              {user?.type}
            </CommonHeader>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="">
            <CommonHeader size="sm">Upload Date</CommonHeader>
            <CommonHeader size="sm" className=" !text-[#717182]">
              {user?.date}
            </CommonHeader>
          </div>
          <div className="">
            <CommonHeader size="sm">Status</CommonHeader>
            <CommonHeader size="sm" className=" !text-[#717182]">
              {user?.status}
            </CommonHeader>
          </div>
        </div>
        <div>
          <CommonHeader size="sm">AI Analysis</CommonHeader>
          <CommonBorder size="sm" className="!bg-[#ECECF0] mt-1">
            <CommonHeader size="sm">{user?.findings}</CommonHeader>
          </CommonBorder>
        </div>
        <div>
          <CommonHeader size="sm" className="pb-1">
            Key Metrics
          </CommonHeader>
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex justify-between bg-[#ECECF0] p-2 rounded mb-2"
            >
              <CommonHeader size="sm">{metric.label}</CommonHeader>
              <CommonHeader size="sm">{metric.value}</CommonHeader>
            </div>
          ))}
        </div>
        <div>
          <CommonHeader size="sm">Recommendations</CommonHeader>
          <div className="space-y-1 ">
            {recommendations.map((item, index) => (
              <CommonHeader size="sm" className=" !text-[#717182]" key={index}>
                {item}
              </CommonHeader>
            ))}
          </div>
        </div>
      </CommonSpace>
    </CommonBorder>
  );
};

export default ReportModal;
