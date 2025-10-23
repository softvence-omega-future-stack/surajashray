import React from "react";
import UsersTable from "../../../../components/user/UsersTable";
import UserSearch from "@/components/user/UserSearch";
import CommonSpace from "@/components/common/space/CommonSpace";

const page = () => {
  return (
    <div>
      <UserSearch />
      <CommonSpace>
        <UsersTable />
      </CommonSpace>
    </div>
  );
};

export default page;
