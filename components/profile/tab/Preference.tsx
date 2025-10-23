"use client";
import CommonButton from "@/components/common/button/CommonButton";
import CommonBorder from "@/components/common/custom/CommonBorder";
import CommonHeader from "@/components/common/header/CommonHeader";
import ToggleRow from "@/components/reuseable/ToggleRow";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
interface PreferenceProps {
  handleCancel: () => void;
}

const Preference: React.FC<PreferenceProps> = ({ handleCancel }) => {
  const [preferences, setPreferences] = useState({
    pushNotifications: true,
    emailAlerts: false,
    newUserRegistrations: true,
    criticalHealthAlerts: true,
    labReportUploads: true,
    systemUpdates: false,
  });

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    console.log("Preferences saved:", preferences);
    handleCancel();
  };

  return (
    <div className="space-y-4">
      {/* Push Notifications */}
      <CommonBorder size="sm" className="flex gap-4 items-center">
        <span className="text-xl text-[#717182]">
          <LuBell />
        </span>
        <ToggleRow
          title="Push Notifications"
          description="Receive notifications for important updates"
          checked={preferences.pushNotifications}
          onChange={() => handleToggle("pushNotifications")}
        />
      </CommonBorder>

      {/* Email Alerts */}
      <CommonBorder size="sm" className="flex gap-4 items-center">
        <span className="text-xl text-[#717182]">
          <FiMail />
        </span>
        <ToggleRow
          title="Email Alerts"
          description="Get email notifications for critical events"
          checked={preferences.emailAlerts}
          onChange={() => handleToggle("emailAlerts")}
        />
      </CommonBorder>

      {/* Notification Settings */}
      <CommonBorder size="sm">
        <CommonHeader size="md" className="pb-3">
          Notification Settings
        </CommonHeader>

        <div className="space-y-2">
          <ToggleRow
            title="New User Registrations"
            checked={preferences.newUserRegistrations}
            onChange={() => handleToggle("newUserRegistrations")}
          />
          <ToggleRow
            title="Critical Health Alerts"
            checked={preferences.criticalHealthAlerts}
            onChange={() => handleToggle("criticalHealthAlerts")}
          />
          <ToggleRow
            title="Lab Report Uploads"
            checked={preferences.labReportUploads}
            onChange={() => handleToggle("labReportUploads")}
          />
          <ToggleRow
            title="System Updates"
            checked={preferences.systemUpdates}
            onChange={() => handleToggle("systemUpdates")}
          />
        </div>
      </CommonBorder>

      {/* Buttons */}
      <div className="flex justify-end items-center gap-4 pb-8 pt-20">
        <CommonButton variant="secondary" onClick={handleCancel}>
          Cancel
        </CommonButton>
        <CommonButton onClick={handleSave}>Save Changes</CommonButton>
      </div>
    </div>
  );
};

export default Preference;
