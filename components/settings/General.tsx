"use client";
import React, { useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonSelect from "../common/custom/CommonSelect";
import FormHeader from "../reuseable/FormHeader";
import ToggleRow from "../reuseable/ToggleRow";

interface GeneralSettingsForm {
  appName: string;
  supportEmail: string;
  timezone: string;
  maintenanceMode: boolean;
  allowNewRegistrations: boolean;
  dataExport: boolean;
}

const timezoneOptions = [
  { label: "UTC", value: "UTC" },
  { label: "EST", value: "EST" },
  { label: "PST", value: "PST" },
] as const;

const General = () => {
  const [formData, setFormData] = useState<GeneralSettingsForm>({
    appName: "Wellness Admin Portal",
    supportEmail: "support@wellnessapp.com",
    timezone: "UTC",
    maintenanceMode: false,
    allowNewRegistrations: true,
    dataExport: false,
  });

  // unified change handler
  const handleChange = (
    name: keyof GeneralSettingsForm,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
            title="General Settings"
            description="Manage your application preferences"
            size="md"
          />

          <div>
            <label className={inputClass.label}>Application Name</label>
            <input
              type="text"
              name="appName"
              value={formData.appName}
              onChange={(e) => handleChange("appName", e.target.value)}
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Support Email</label>
            <input
              type="email"
              name="supportEmail"
              value={formData.supportEmail}
              onChange={(e) => handleChange("supportEmail", e.target.value)}
              className={inputClass.input}
            />
          </div>

          <div>
            <label className={inputClass.label}>Timezone</label>
            <CommonSelect
              value={formData.timezone}
              item={timezoneOptions}
              onValueChange={(val) => handleChange("timezone", val)}
              className="w-full"
            />
          </div>

          <ToggleRow
            title="Maintenance Mode"
            description="Temporarily disable user access for maintenance."
            checked={formData.maintenanceMode}
            onChange={(value) => handleChange("maintenanceMode", value)}
            borderTop
          />

          <ToggleRow
            title="Allow New User Registrations"
            description="Enable or disable new user sign-ups."
            checked={formData.allowNewRegistrations}
            onChange={(value) => handleChange("allowNewRegistrations", value)}
          />

          <ToggleRow
            title="Data Export"
            description="Allow users to export their health data."
            checked={formData.dataExport}
            onChange={(value) => handleChange("dataExport", value)}
            borderBottom
          />

          <CommonButton type="submit" className="">
            Save Changes
          </CommonButton>
        </form>
      </CommonBorder>
    </>
  );
};

export default General;
