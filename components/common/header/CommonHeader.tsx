import React, { type ReactNode } from "react";
import clsx from "clsx";

interface CommonHeaderProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;

  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  children,
  className = "",
  size = "md",
  ...props
}) => {
  const baseStyles = "font-normal text-start";

  const sizeStyles: Record<typeof size, string> = {
    xs: "text-xs leading-[16px] text-[#717182]",
    sm: "text-sm leading-[20px] text-[#0A0A0A]",
    md: "text-base leading-[16px] text-[#0A0A0A] ",
    lg: "text-xl leading-[28px] text-[#0A0A0A]",
    xl: "text-2xl leading-[32px] text-[#0A0A0A]",
  };

  return (
    <h2 className={clsx(baseStyles, sizeStyles[size], className)} {...props}>
      {children}
    </h2>
  );
};

export default CommonHeader;
