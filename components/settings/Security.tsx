"use client";
import React, { useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonSelect from "../common/custom/CommonSelect";
import FormHeader from "../reuseable/FormHeader";
import ToggleRow from "../reuseable/ToggleRow";

interface SecuritySettingsForm {
  twoFactorAuth: boolean;
  sessionTimeout: boolean;
  sessionDuration: number;
  dataEncryption: boolean;
  activityLogging: boolean;
  hipaaCompliance: boolean;
  backupFrequency: "Daily" | "Weekly";
  dataRetention: number;
}

const backupOptions = [
  { label: "Daily", value: "Daily" },
  { label: "Weekly", value: "Weekly" },
] as const;

const Security = () => {
  const [formData, setFormData] = useState<SecuritySettingsForm>({
    twoFactorAuth: false,
    sessionTimeout: false,
    sessionDuration: 30,
    dataEncryption: false,
    activityLogging: false,
    hipaaCompliance: false,
    backupFrequency: "Daily",
    dataRetention: 365,
  });

  const handleChange = <K extends keyof SecuritySettingsForm>(
    name: K,
    value: SecuritySettingsForm[K]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Security Settings submitted:", formData);
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
            title="Security Settings"
            description="Manage security and privacy configurations"
            size="md"
          />

          <ToggleRow
            title="Two-Factor Authentication"
            description="Require 2FA for enhanced account security"
            checked={formData.twoFactorAuth}
            onChange={(val) => handleChange("twoFactorAuth", val)}
          />

          <ToggleRow
            title="Session Timeout"
            description="Automatically log out inactive users"
            checked={formData.sessionTimeout}
            onChange={(val) => handleChange("sessionTimeout", val)}
          />

          <div>
            <label className={inputClass.label}>
              Session Duration (minutes)
            </label>

            <input
              type="number"
              value={formData.sessionDuration}
              onChange={(e) =>
                handleChange("sessionDuration", Number(e.target.value))
              }
              className={inputClass.input}
            />
          </div>

          <ToggleRow
            title="Data Encryption"
            description="Encrypt all user and system data in storage"
            checked={formData.dataEncryption}
            onChange={(val) => handleChange("dataEncryption", val)}
            borderTop
          />

          <ToggleRow
            title="Activity Logging"
            description="Track important admin and user actions"
            checked={formData.activityLogging}
            onChange={(val) => handleChange("activityLogging", val)}
          />

          <ToggleRow
            title="HIPAA Compliance Mode"
            description="Enable enhanced security for health data"
            checked={formData.hipaaCompliance}
            onChange={(val) => handleChange("hipaaCompliance", val)}
            borderBottom
          />

          <div>
            <label className={inputClass.label}>
              Automated Backup Frequency
            </label>
            <CommonSelect
              value={formData.backupFrequency}
              item={backupOptions}
              onValueChange={(val) => handleChange("backupFrequency", val)}
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>
              Data Retention Period (days)
            </label>
            <input
              type="number"
              value={formData.dataRetention}
              onChange={(e) =>
                handleChange("dataRetention", Number(e.target.value))
              }
              className={inputClass.input}
            />
          </div>

          <CommonButton type="submit" className="">
            Save Security Settings
          </CommonButton>
        </form>
      </CommonBorder>
    </>
  );
};

export default Security;
