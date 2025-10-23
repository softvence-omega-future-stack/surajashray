import ChatCartSection from "@/components/chat/ChatCartSection";
import ChatMapSection from "@/components/chat/ChatMapSection";
import ChatTable from "@/components/chat/ChatTable";
import CommonSpace from "@/components/common/space/CommonSpace";
import CommonSpaceBottom from "@/components/common/space/CommonSpaceBottom";

const page = () => {
  return (
    <div>
      <ChatCartSection />
      <CommonSpace>
        <ChatMapSection />
      </CommonSpace>
      <CommonSpaceBottom>
        <ChatTable />
      </CommonSpaceBottom>
    </div>
  );
};

export default page;
