"use client";
import CommonButton from "@/components/common/button/CommonButton";
import CommonBorder from "@/components/common/custom/CommonBorder";
import CommonHeader from "@/components/common/header/CommonHeader";
import React, { useState } from "react";
import { LuKey } from "react-icons/lu";

const Security: React.FC = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [activeSessions] = useState([
    { id: 1, device: "Chrome on Windows", lastActive: "now", active: true },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword === passwordData.confirmPassword) {
      console.log("Password updated:", passwordData);
    } else {
      console.log("Passwords do not match");
    }
  };

  const inputClass = {
    input:
      "w-full p-3 rounded-lg bg-[#F3F3F5] leading-[14px] text-sm text-primary focus:outline-none",
    label: "leading-[20px] text-sm text-primary block mb-1",
  };
  return (
    <div className="space-y-3">
      <CommonBorder size="xs">
        <form onSubmit={handleUpdatePassword} className="space-y-3">
          <div className="flex items-center gap-1">
            <span>
              <LuKey />
            </span>
            <CommonHeader className="">Password & Authentication</CommonHeader>
          </div>
          <div>
            <label className={inputClass.label}>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className={inputClass.input}
            />
          </div>

          <CommonButton type="submit" className="w-full">
            Update Password
          </CommonButton>
        </form>
      </CommonBorder>
      <CommonBorder size="xs" className="space-y-3">
        <CommonHeader>Two-Factor Authentication</CommonHeader>
        <CommonHeader className="!text-[#717182]">
          Add an extra layer of security to your account
        </CommonHeader>
        <CommonButton size="md" variant="secondary" className="w-full ">
          Enable 2FA
        </CommonButton>
      </CommonBorder>

      <CommonBorder size="xs" className="mb-6">
        <CommonHeader className="pb-3">Active Sessions</CommonHeader>
        {activeSessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center justify-between bg-[#ECECF0] p-3 rounded-md"
          >
            <div>
              <CommonHeader size="sm">Current Session</CommonHeader>
              <CommonHeader className="!text-[#717182]">
                {session.device} - Last active {session.lastActive}
              </CommonHeader>
            </div>

            {session.active && (
              <CommonHeader size="xs" className="!text-[#030213]">
                Active
              </CommonHeader>
            )}
          </div>
        ))}
      </CommonBorder>
    </div>
  );
};

export default Security;
