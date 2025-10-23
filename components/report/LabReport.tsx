"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import check from "@/public/check.svg";
import pending from "@/public/pending.svg";
import review from "@/public/review.svg";
import { Download, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import ReportModal from "./ReportModal";
import reports, { UserReport } from "./data";
export default function LabReport() {
  const [filter, setFilter] = useState("All Reports");

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserReport | null>(null);

  const handleOpenModal = (user: UserReport) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const filteredReports =
    filter === "All Reports"
      ? reports
      : reports.filter((r) => r.status === filter);

  const priorityColor: Record<string, string> = {
    Low: "!bg-[#ECEEF2] !text-[#030213]",
    Medium: "!bg-[#030213] !text-[#FFFFFF]",
    High: "!bg-[#D4183D] !text-white",
  };
  const tableHeaders = [
    { label: "User", align: "left" },
    { label: "Report Type", align: "left" },
    { label: "Upload Date", align: "left" },
    { label: "Status", align: "left" },
    { label: "Priority", align: "left" },
    { label: "Findings", align: "left" },
    { label: "Actions", align: "center" },
  ];

  const tableData = {
    table: "min-w-full text-sm text-left text-primary py-3 px-4",
    thead: "border-b-[1.73px] border-border ",
    tbody: "border-b-[1.73px] border-border last:border-0",
    td: "py-3 px-4",
  };
  return (
    <>
      <CommonBorder>
        <CommonHeader size="md" className="pb-7.5">
          Lab Reports
        </CommonHeader>

        <Tabs defaultValue="All Reports" onValueChange={setFilter}>
          <TabsList className="bg-gray-100 p-1 rounded-xl mb-4">
            {["All Reports", "Pending", "Analyzed", "Reviewed"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200  !cursor-pointer ${
                  filter === tab
                    ? "bg-white shadow-sm"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="overflow-x-auto">
          <table className={tableData.table}>
            <thead className="">
              <tr className={tableData.thead}>
                {tableHeaders.map((header) => (
                  <th
                    key={header.label}
                    className={`text-${header.align} py-3 px-4 !font-normal`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredReports.map((r, i) => (
                <tr key={i} className={tableData.tbody}>
                  <td className={tableData.td}>{r.user}</td>
                  <td className={tableData.td}>{r.type}</td>
                  <td className={tableData.td}>{r.date}</td>
                  <td className={`${tableData.td} `}>
                    <CommonButton
                      size="sm"
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {r.status === "Pending" && (
                        <Image
                          src={pending}
                          alt="Pending"
                          width={16}
                          height={16}
                        />
                      )}
                      {r.status === "Analyzed" && (
                        <Image
                          src={check}
                          alt="Checked"
                          width={16}
                          height={16}
                        />
                      )}
                      {r.status === "Reviewed" && (
                        <Image
                          src={review}
                          alt="Reviewed"
                          width={16}
                          height={16}
                        />
                      )}

                      {r.status}
                    </CommonButton>
                  </td>
                  <td className={tableData.td}>
                    <CommonButton
                      size="xs"
                      variant="small"
                      className={`${priorityColor[r.priority]}`}
                    >
                      {r.priority}
                    </CommonButton>
                  </td>
                  <td className={tableData.td}>{r.findings}</td>
                  <td className="p-3 flex justify-center space-x-3">
                    <Eye
                      onClick={() => handleOpenModal(r)}
                      className="w-4 h-4 cursor-pointer"
                    />

                    <Download className="w-4 h-4 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CommonBorder>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <ReportModal setOpenModal={setOpenModal} user={selectedUser} />
        </div>
      )}
    </>
  );
}
