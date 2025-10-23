import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";

interface ActivityItem {
  name: string;
  action: string;
  time: string;
}

const activityData: ActivityItem[] = [
  { name: "John Doe", action: "Uploaded lab report", time: "5 min ago" },
  {
    name: "Sarah Smith",
    action: "Completed wellness nudge",
    time: "12 min ago",
  },
  { name: "Mike Johnson", action: "Scanned meal", time: "23 min ago" },
  { name: "Emily Brown", action: "Connected Apple Watch", time: "1 hour ago" },
  { name: "David Lee", action: "Started AI chat session", time: "2 hours ago" },
];

const RecentActivity = () => {
  return (
    <CommonBorder>
      <CommonHeader size="md" className="pb-7.5">
        Recent Platform Activity
      </CommonHeader>
      <div className=" flex flex-col gap-4 ">
        {activityData.map((activity, i) => (
          <div
            key={i}
            className=" flex justify-between border-b-[1.73px] border-border pb-1 last:border-0 "
          >
            <div>
              <CommonHeader size="sm">{activity.name}</CommonHeader>
              <CommonHeader size="xs">{activity.action}</CommonHeader>
            </div>
            <CommonHeader size="sm">{activity.time}</CommonHeader>
          </div>
        ))}
      </div>
    </CommonBorder>
  );
};

export default RecentActivity;
