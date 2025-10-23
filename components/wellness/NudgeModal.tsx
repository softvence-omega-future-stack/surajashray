"use client";
import { useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonSelect from "../common/custom/CommonSelect";
import CustomSwitch from "../common/custom/CustomSwitch";
import CommonHeader from "../common/header/CommonHeader";
import CloseButton from "../reuseable/CloseButton";

export interface NudgeModalProps {
  closeModal: () => void;
}
const NudgeModal: React.FC<NudgeModalProps> = ({ closeModal }) => {
  const [category, setCategory] = useState<
    "Wellness" | "Nutrition" | "Fitness" | "Sleep"
  >("Wellness");
  const [isActive, setIsActive] = useState(false);

  const categoryOptions = [
    { label: "Wellness", value: "Wellness" },
    { label: "Nutrition", value: "Nutrition" },
    { label: "Fitness", value: "Fitness" },
    { label: "Sleep", value: "Sleep" },
  ] as const;

  return (
    <CommonBorder shadow size="md" className=" relative max-w-[512px]">
      <div className=" w-fit ml-auto absolute top-1 right-2.5 ">
        <CloseButton close={closeModal} />
      </div>
      <CommonHeader size="md" className="!text-lg !font-bold !leading-[18px]">
        Create New Wellness Nudge
      </CommonHeader>

      <CommonHeader size="sm" className="pt-2 !text-[#717182] pb-4">
        Set up a new wellness reminder for your users.
      </CommonHeader>

      <form className="space-y-3">
        <div>
          <CommonHeader size="sm" className="pb-1">
            Title
          </CommonHeader>
          <input
            type="text"
            placeholder="e.g., Hydration Reminder"
            className="w-full rounded-lg p-2 bg-[#F3F3F5] focus:outline-none"
          />
        </div>

        <div>
          <CommonHeader size="sm" className="pb-1">
            Message
          </CommonHeader>
          <textarea
            placeholder="e.g., Time to drink some water!"
            className="w-full rounded-lg p-2 bg-[#F3F3F5] focus:outline-none"
          />
        </div>

        <div>
          <CommonHeader size="sm" className="pb-1">
            Category
          </CommonHeader>
          <CommonSelect
            value={category}
            onValueChange={setCategory}
            item={categoryOptions}
            className="w-full !border-0"
          />
        </div>

        <div>
          <CommonHeader size="sm" className="pb-1">
            Frequency
          </CommonHeader>
          <input
            type="text"
            placeholder="e.g., Every 2 hours"
            className="w-full rounded-lg p-2 bg-[#F3F3F5] focus:outline-none"
            disabled
          />
        </div>

        <div className="flex  justify-between items-center gap-2">
          <CommonHeader size="sm" className="">
            Active
          </CommonHeader>
          <CustomSwitch checked={isActive} onChange={setIsActive} />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <CommonButton onClick={closeModal} variant="secondary">
            Cancel
          </CommonButton>
          <CommonButton> Create Nudge</CommonButton>
        </div>
      </form>
    </CommonBorder>
  );
};

export default NudgeModal;
