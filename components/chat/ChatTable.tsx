"use client";
import CommonButton from "../common/button/CommonButton";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import MiniTabs from "../reuseable/MiniTabs";

interface ChatEntry {
  user: string;
  topic: string;
  messages: number;
  duration: string;
  time: string;
}

const chatData: ChatEntry[] = [
  {
    user: "John Doe",
    topic: "Sleep improvement",
    messages: 12,
    duration: "8 min",
    time: "2 hours ago",
  },
  {
    user: "Sarah Smith",
    topic: "Meal planning",
    messages: 8,
    duration: "5 min",
    time: "3 hours ago",
  },
  {
    user: "Mike Johnson",
    topic: "Exercise routine",
    messages: 15,
    duration: "12 min",
    time: "5 hours ago",
  },
  {
    user: "Emily Brown",
    topic: "Stress management",
    messages: 6,
    duration: "4 min",
    time: "6 hours ago",
  },
];

const tableData = {
  table: "min-w-full text-sm text-left text-primary py-3 px-4",
  thead: "border-b-[1.73px] border-border !font-normal px-4 py-3",
  tbody: "border-b-[1.73px] border-border last:border-0",
  td: "py-3 px-4",
};
const tableHeaders = ["User", "Topic", "Messages", "Duration", "Time"];
const questions = [
  { text: "How can I improve my sleep quality?", times: 342 },
  { text: "What are good protein sources?", times: 298 },
  { text: "How much water should I drink daily?", times: 267 },
  { text: "What exercises are best for weight loss?", times: 234 },
  { text: "How to manage stress naturally?", times: 189 },
];
const CommonQuestion = () => {
  return (
    <div className=" space-y-3">
      {questions.map((question) => (
        <CommonBorder
          key={question.text}
          size="sm"
          className="flex justify-between items-center"
        >
          <div>
            <CommonHeader size="sm">{question.text}</CommonHeader>
            <CommonHeader size="sm" className="!text-[#717182]">
              Asked {question.times} times
            </CommonHeader>
          </div>
          <CommonButton size="md" variant="secondary">
            View Responses
          </CommonButton>
        </CommonBorder>
      ))}
    </div>
  );
};

const RecentConversions = () => {
  return (
    <table className={tableData.table}>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header} className={` ${tableData.thead}  !font-normal`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {chatData.map((chat, i) => (
          <tr key={i} className="border-t">
            <td className={tableData.td}>{chat.user}</td>
            <td className={tableData.td}>{chat.topic}</td>
            <td className={tableData.td}>{chat.messages}</td>
            <td className={tableData.td}>{chat.duration}</td>
            <td className={tableData.td}>{chat.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ChatTable = () => {
  return (
    <CommonBorder>
      <CommonHeader size="md" className="pb-7.5">
        Chat Management
      </CommonHeader>

      <MiniTabs
        defaultValue="recent"
        tabs={[
          {
            label: "Recent Conversations",
            value: "recent",
            content: <RecentConversions />,
          },
          {
            label: "Common Questions",
            value: "common",
            content: <CommonQuestion />,
          },
        ]}
      />
    </CommonBorder>
  );
};

export default ChatTable;
