import clsx from "clsx";
import React, { type ReactNode } from "react";

interface CommonButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  shadow?: boolean;
}

const CommonBorder: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  size = "md",
  shadow = false,
  ...props
}) => {
  const baseStyles = "border-[1.73px] border-border w-full bg-white";
  const shadowStyles =
    "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]";
  const sizeStyles: Record<typeof size, string> = {
    xs: "p-3 rounded-md ",
    sm: "p-4 rounded-md ",
    md: "p-6  rounded-lg ",
    lg: "p-8 rounded-2xl ",
  };

  return (
    <div
      className={clsx(
        baseStyles,
        shadow && shadowStyles,
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CommonBorder;
