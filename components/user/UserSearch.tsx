"use client";
import { CiImport } from "react-icons/ci";
import DashboardSearch from "../reuseable/DashboardSearch";
import ButtonWithIcon from "../common/button/ButtonWithIcon";
import CommonSelect from "../common/custom/CommonSelect";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
] as const;
const UserSearch = () => {
  const [filter, setFilter] =
    useState<(typeof statusOptions)[number]["value"]>("all");
  return (
    <div className=" w-full flex items-start justify-between">
      <DashboardSearch />
      <div className="flex items-start gap-2 ">
        <CommonSelect
          value={filter}
          onValueChange={(val) => setFilter(val)}
          item={statusOptions}
          w={100}
          icon={<CiFilter />}
        />

        <ButtonWithIcon icon={CiImport} className="">
          Export
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default UserSearch;
