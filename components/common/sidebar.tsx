"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { CiApple } from "react-icons/ci";
import { FiActivity, FiSettings } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdChatBubbleOutline, MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import logo from "../../public/logo.png";

interface SidebarItem {
  icon?: React.ElementType;
  label: string;
  path?: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: MdDashboard, label: "Dashboard", path: "/dashboard/overview" },
  {
    icon: LuUsers,
    label: "Users Management",
    path: "/dashboard/users-management",
  },
  {
    icon: FiActivity,
    label: "Health Monitoring",
    path: "/dashboard/health-monitoring",
  },
  {
    icon: CiApple,
    label: "Nutrition Database",
    path: "/dashboard/nutrition-database",
  },
  {
    icon: TbReportAnalytics,
    label: "Lab Reports",
    path: "/dashboard/lab-reports",
  },
  { icon: MdChatBubbleOutline, label: "AI Chat", path: "/dashboard/ai-chat" },
  {
    icon: AiOutlineBell,
    label: "Wellness Nudges",
    path: "/dashboard/wellness-nudges",
  },
  { icon: VscGraph, label: "Analytics", path: "/dashboard/analytics" },
  { icon: FiSettings, label: "Settings", path: "/dashboard/settings" },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="flex justify-center items-center border-b-[1.73px] border-border h-16">
        <Image src={logo} alt="Logo" width={60} height={60} priority />
      </div>
      <nav className="flex-1 mt-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = item.path && pathname.startsWith(item.path);
          return (
            <Link
              key={item.label}
              href={item.path || "#"}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-normal transition-colors ${
                isActive
                  ? "bg-sky text-[#F5F5F7]"
                  : "text-primary hover:bg-gray-100"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.icon && <item.icon size={20} />}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar (lg+) */}
      <aside className="bg-[#F5F5F7] min-h-screen w-[260px] hidden lg:flex flex-col border-r-[1.73px] border-border">
        <SidebarContent />
      </aside>

      {/* Mobile & Tablet Menu Button (sm + md) */}
      <div className="fixed top-4 left-4 z-[1000] lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md bg-[#F5F5F7] border border-border hover:bg-gray-100">
              <Menu size={22} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="p-0 w-[260px] bg-[#F5F5F7] border-r-[1.73px] border-border"
          >
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
