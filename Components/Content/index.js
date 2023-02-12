import React from "react";
import History from "./History";
import Overview from "./Overview";
import QuickTransfer from "./QuickTransfer";
import Top from "./Top";

const Content = () => {
  return (
    <div>
      <div className="mx-5 border-b-2">
        <Top />
      </div>
      <div className="grid grid-cols-3 mx-5 mt-5 border-b-2 gap-7">
        <div className="col-span-2">
          <Overview></Overview>
        </div>
        <QuickTransfer />
      </div>
      <History />
    </div>
  );
};

export default Content;
