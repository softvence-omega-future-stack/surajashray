"use client";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";

const scanningTrendsData = [
  { month: "Jan", scans: 4200 },
  { month: "Feb", scans: 5100 },
  { month: "Mar", scans: 6300 },
  { month: "Apr", scans: 7800 },
  { month: "May", scans: 9100 },
  { month: "Jun", scans: 10800 },
];
const ScanningTends = () => {
  return (
    <CommonBorder className="">
      <CommonHeader size="md" className="pb-7.5">
        Scanning Trends
      </CommonHeader>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={scanningTrendsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="scans" fill="#8884D8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CommonBorder>
  );
};

export default ScanningTends;
