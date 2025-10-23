"use client";

import React, { useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonSelect from "../common/custom/CommonSelect";
import FormHeader from "../reuseable/FormHeader";
import ToggleRow from "../reuseable/ToggleRow"; // same reusable from General

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  userActivityAlerts: boolean;
  healthAlertNotifications: boolean;
  notificationEmail: string;
  alertThreshold: string;
}

const alertThresholdOptions = [
  { label: "Medium - Important Only", value: "medium" },
  { label: "High - Critical Only", value: "high" },
  { label: "Low - All Alerts", value: "low" },
] as const;

const Notifications = () => {
  const [formData, setFormData] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    userActivityAlerts: false,
    healthAlertNotifications: false,
    notificationEmail: "admin@wellnessapp.com",
    alertThreshold: "medium",
  });

  const handleChange = (
    name: keyof NotificationSettings,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Notification Settings Saved:", formData);
  };

  const inputClass = {
    input:
      "w-full p-3 rounded-lg bg-[#F3F3F5] leading-[14px] text-sm text-primary focus:outline-none ",
    label: "leading-[20px] text-sm text-primary block mb-1",
  };

  return (
    <>
      <CommonBorder>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormHeader
            title="Notification Settings"
            description="Configure system notifications and alerts"
            size="md"
          />

          <ToggleRow
            title="Email Notifications"
            description="Send email notifications for system events."
            checked={formData.emailNotifications}
            onChange={(value) => handleChange("emailNotifications", value)}
          />

          <ToggleRow
            title="Push Notifications"
            description="Enable push notifications for critical alerts."
            checked={formData.pushNotifications}
            onChange={(value) => handleChange("pushNotifications", value)}
          />

          <ToggleRow
            title="User Activity Alerts"
            description="Get notified about unusual user activity."
            checked={formData.userActivityAlerts}
            onChange={(value) => handleChange("userActivityAlerts", value)}
          />

          <ToggleRow
            title="Health Alert Notifications"
            description="Send alerts related to user health data or system warnings."
            checked={formData.healthAlertNotifications}
            onChange={(value) =>
              handleChange("healthAlertNotifications", value)
            }
            borderBottom
          />

          <div>
            <label className={inputClass.label}>Notification Email</label>
            <input
              type="email"
              value={formData.notificationEmail}
              onChange={(e) =>
                handleChange("notificationEmail", e.target.value)
              }
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Alert Threshold</label>
            <CommonSelect
              value={formData.alertThreshold}
              item={alertThresholdOptions}
              onValueChange={(val) => handleChange("alertThreshold", val)}
              className="w-full"
            />
          </div>

          <CommonButton type="submit">Save Notification Settings</CommonButton>
        </form>
      </CommonBorder>
    </>
  );
};

export default Notifications;
