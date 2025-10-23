import React, { type ReactNode } from "react";
import clsx from "clsx";

interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "danger" | "small";
  size?: "xs" | "sm" | "md" | "lg";
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "rounded-lg font-normal transition-colors duration-200 focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed leading-[20px] cursor-pointer text-sm";

  const variantStyles: Record<typeof variant, string> = {
    primary: "bg-[#030213] text-white border-[1.73px] border-black ",
    secondary: "bg-white text-primary border-[1.73px] border-border ",
    small: "bg-[#ECEEF2] text-[#030213]  ",
    outline:
      "bg-transparent text-[#030213] border border-[#030213] hover:bg-[#030213] hover:text-white",
    danger: "bg-red-600 text-white border border-red-600 hover:bg-red-700",
  };

  const sizeStyles: Record<typeof size, string> = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;
