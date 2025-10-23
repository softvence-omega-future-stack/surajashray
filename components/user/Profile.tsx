import React from "react";
import { BsPhone } from "react-icons/bs";
import { FiCalendar, FiMail } from "react-icons/fi";
import CommonButton from "../common/button/CommonButton";
import CommonHeader from "../common/header/CommonHeader";
import { Badge } from "../ui/badge";

export interface User {
  name: string;
  email: string;
  status: "active" | "inactive";
  devices: string;
  joinDate: string;
  lastActive: string;
}

interface Props {
  user: User | null;
}

const Profile: React.FC<Props> = ({ user }) => {
  const contactInfo = [
    {
      icon: <FiMail className="text-gray-500 w-4 h-4" />,
      label: "Email",
      value: user?.email,
    },
    {
      icon: <BsPhone className="text-gray-500 w-4 h-4" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
  ];

  const personalInfo = [
    { label: "Age", value: "25 years" },
    { label: "Gender", value: "Male" },
    { label: "Height", value: `5'10"` },
    { label: "Weight", value: "150 lbs" },
  ];

  const dateInfo = [
    {
      icon: <FiCalendar className="text-gray-500" />,
      label: "Join Date",
      value: user?.joinDate,
    },
    {
      label: "Last Active",
      value: user?.lastActive,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Name & Status */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <CommonHeader size="sm" className=" !text-[#717182]">
            Full Name
          </CommonHeader>
          <CommonHeader size="md" className="">
            {user?.name}
          </CommonHeader>
        </div>
        <div className="space-y-2">
          <CommonHeader size="sm" className=" !text-[#717182]">
            Status
          </CommonHeader>
          <Badge className="block bg-[#030213] text-white rounded-xl px-2 py-1 ">
            {user?.status}
          </Badge>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-2 gap-6 border-t-[1.73px] border-border pt-4">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                {item.icon}
                <CommonHeader size="sm" className=" !text-[#717182]">
                  {item.label}
                </CommonHeader>
              </div>

              <CommonHeader size="md" className="">
                {item.value}
              </CommonHeader>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Info */}
      <div className="grid grid-cols-2 gap-6  border-t-[1.73px] border-border pt-4">
        {personalInfo.map((item, index) => (
          <div key={index} className="space-y-2">
            <CommonHeader size="sm" className=" !text-[#717182]">
              {item.label}
            </CommonHeader>
            <CommonHeader size="md" className="">
              {item.value}
            </CommonHeader>
          </div>
        ))}
      </div>

      {/* Devices */}
      <div className=" border-t-[1.73px] border-border pt-4 space-y-2">
        <CommonHeader size="sm" className=" !text-[#717182]">
          Connected Devices
        </CommonHeader>
        <CommonButton variant="secondary" className="block">
          {user?.devices}
        </CommonButton>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-6  border-t-[1.73px] border-border pt-4">
        {dateInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="space-y-2">
              <div className="flex items-center gap-1 ">
                {item.icon}
                <CommonHeader size="sm" className=" !text-[#717182]">
                  {item.label}
                </CommonHeader>
              </div>

              <CommonHeader size="md" className="">
                {item.value}
              </CommonHeader>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
