export type UserReport = {
  user: string;
  type: string;
  date: string;
  status: "Pending" | "Analyzed" | "Reviewed";
  priority: "Low" | "Medium" | "High";
  findings: string;
};

const reports: UserReport[] = [
  {
    user: "John Doe",
    type: "Blood Test",
    date: "2024-06-15",
    status: "Analyzed",
    priority: "Medium",
    findings: "Cholesterol slightly elevated",
  },
  {
    user: "Sarah Smith",
    type: "Complete Blood Count",
    date: "2024-06-14",
    status: "Pending",
    priority: "Low",
    findings: "-",
  },
  {
    user: "Mike Johnson",
    type: "Lipid Panel",
    date: "2024-06-13",
    status: "Analyzed",
    priority: "Low",
    findings: "All values within normal range",
  },
  {
    user: "Emily Brown",
    type: "Thyroid Function",
    date: "2024-06-12",
    status: "Reviewed",
    priority: "High",
    findings: "TSH levels slightly low",
  },
  {
    user: "David Lee",
    type: "Glucose Test",
    date: "2024-06-11",
    status: "Analyzed",
    priority: "High",
    findings: "Prediabetic range detected",
  },
];
export default reports;
