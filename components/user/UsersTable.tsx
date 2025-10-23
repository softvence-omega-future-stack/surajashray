"use client";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CommonBorder from "@/components/common/custom/CommonBorder";
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonButton from "@/components/common/button/CommonButton";
import { useState } from "react";
import UserModal from "./UserModal";

export interface User {
  name: string;
  email: string;
  status: "active" | "inactive";
  devices: string;
  joinDate: string;
  lastActive: string;
}

const users: User[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    devices: "Apple Watch",
    joinDate: "2024-01-15",
    lastActive: "2 hours ago",
  },
  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    status: "active",
    devices: "Fitbit",
    joinDate: "2024-02-20",
    lastActive: "1 day ago",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "inactive",
    devices: "Google Fit",
    joinDate: "2023-12-10",
    lastActive: "2 weeks ago",
  },
  {
    name: "Emily Brown",
    email: "emily@example.com",
    status: "active",
    devices: "Apple Watch",
    joinDate: "2024-03-05",
    lastActive: "5 min ago",
  },
  {
    name: "David Lee",
    email: "david@example.com",
    status: "active",
    devices: "Fitbit",
    joinDate: "2024-01-28",
    lastActive: "3 hours ago",
  },
];

const tableHeaders = [
  { label: "Name" },
  { label: "Email" },
  { label: "Status" },
  { label: "Devices" },
  { label: "Join Date" },
  { label: "Last Active" },
  { label: "Actions" },
];

const tableData = {
  table: "min-w-full text-sm text-left text-primary py-3 px-4",
  thead: "border-b-[1.73px] border-border",
  tbody: "border-b-[1.73px] border-border last:border-0",
  td: "py-3 px-4",
};
export default function UsersTable() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  return (
    <>
      <CommonBorder>
        <CommonHeader size="md" className="pb-7.5">
          All Users ({users.length})
        </CommonHeader>

        <div className="overflow-x-auto">
          <table className={tableData.table}>
            <thead>
              <tr className={tableData.thead}>
                {tableHeaders.map((header) => (
                  <th
                    key={header.label}
                    className={`py-3 px-4 font-medium ${
                      header.label === "Actions" ? "text-center" : ""
                    }`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={tableData.tbody}>
                  <td className={tableData.td}>{user.name}</td>
                  <td className={tableData.td}>{user.email}</td>
                  <td className={tableData.td}>
                    <Badge
                      variant={
                        user.status === "active" ? "default" : "secondary"
                      }
                      className={
                        user.status === "active"
                          ? "bg-[#030213] text-white rounded-xl px-2 py-1"
                          : "bg-[#ECEEF2] text-[#030213] rounded-xl px-2 py-1"
                      }
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className={tableData.td}>
                    <CommonButton variant="secondary" className="">
                      {user.devices}
                    </CommonButton>
                  </td>
                  <td className={tableData.td}>{user.joinDate}</td>
                  <td className={tableData.td}>{user.lastActive}</td>
                  <td className={` ${tableData.td} text-center`}>
                    <button
                      onClick={() => handleOpenModal(user)}
                      className="  cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CommonBorder>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <UserModal setOpenModal={setOpenModal} user={selectedUser} />
        </div>
      )}
    </>
  );
}
