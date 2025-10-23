"use client";

import React, { useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonSelect from "../common/custom/CommonSelect";
import FormHeader from "../reuseable/FormHeader";
import ToggleRow from "../reuseable/ToggleRow";

interface AISettingsForm {
  aiModel: string;
  responseTone: string;
  maxResponseLength: number;
  enableAIChat: boolean;
  aiLabAnalysis: boolean;
  aiNutritionInsights: boolean;
  systemPrompt: string;
}

const aiModelOptions = [
  { label: "GPT-4", value: "gpt-4" },
  { label: "GPT-3.5", value: "gpt-3.5" },
] as const;

const toneOptions = [
  { label: "Friendly", value: "friendly" },
  { label: "Professional", value: "professional" },
] as const;

const AISettings = () => {
  const [formData, setFormData] = useState<AISettingsForm>({
    aiModel: "gpt-4",
    responseTone: "friendly",
    maxResponseLength: 500,
    enableAIChat: true,
    aiLabAnalysis: false,
    aiNutritionInsights: false,
    systemPrompt: "",
  });

  const handleChange = (
    name: keyof AISettingsForm,
    value: string | boolean | number
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("AI Settings Saved:", formData);
  };

  const inputClass = {
    input:
      "w-full p-3 rounded-lg bg-[#F3F3F5] leading-[14px] text-sm text-primary focus:outline-none",
    label: "leading-[20px] text-sm text-primary block mb-1",
  };

  return (
    <>
      <CommonBorder>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormHeader
            title="AI Settings"
            description="Configure AI chat and analysis settings"
            size="md"
          />

          <div>
            <label className={inputClass.label}>AI Model</label>
            <CommonSelect
              value={formData.aiModel}
              item={aiModelOptions}
              onValueChange={(val) => handleChange("aiModel", val)}
              className="w-full"
            />
          </div>

          <div>
            <label className={inputClass.label}>Response Tone</label>
            <CommonSelect
              value={formData.responseTone}
              item={toneOptions}
              onValueChange={(val) => handleChange("responseTone", val)}
              className="w-full"
            />
          </div>

          <div>
            <label className={inputClass.label}>
              Max Response Length (tokens)
            </label>
            <input
              type="number"
              value={formData.maxResponseLength}
              onChange={(e) =>
                handleChange("maxResponseLength", Number(e.target.value))
              }
              className={inputClass.input}
            />
          </div>

          <ToggleRow
            title="Enable AI Chat"
            description="Allow users to interact with AI wellness assistant."
            checked={formData.enableAIChat}
            onChange={(value) => handleChange("enableAIChat", value)}
            borderTop
          />

          <ToggleRow
            title="AI Lab Analysis"
            description="Use AI to analyze uploaded lab reports."
            checked={formData.aiLabAnalysis}
            onChange={(value) => handleChange("aiLabAnalysis", value)}
          />

          <ToggleRow
            title="AI Nutrition Insights"
            description="Provide AI-powered nutrition recommendations."
            checked={formData.aiNutritionInsights}
            onChange={(value) => handleChange("aiNutritionInsights", value)}
            borderBottom
          />

          <div>
            <label className={inputClass.label}>System Prompt</label>
            <textarea
              rows={3}
              value={formData.systemPrompt}
              onChange={(e) => handleChange("systemPrompt", e.target.value)}
              className={`${inputClass.input} resize-none placeholder-primary`}
              placeholder="You are a helpful wellness assistant. Provide accurate, supportive health advice while encouraging users to consult healthcare professionals for serious concerns."
            />
          </div>

          <CommonButton type="submit">Save AI Settings</CommonButton>
        </form>
      </CommonBorder>
    </>
  );
};

export default AISettings;
