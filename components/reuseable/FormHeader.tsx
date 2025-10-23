import React from "react";
import CommonHeader from "../common/header/CommonHeader";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const FormHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = "",
  size = "sm",
}) => {
  return (
    <div className={`  ${className}`}>
      <CommonHeader size={size}>{title}</CommonHeader>
      {description && (
        <CommonHeader
          size={size}
          className="!text-[#717182] mt-1 !leading-[16px]"
        >
          {description}
        </CommonHeader>
      )}
    </div>
  );
};

export default FormHeader;
