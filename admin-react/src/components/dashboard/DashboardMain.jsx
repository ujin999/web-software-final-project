import React from "react";

import Line from "components/Chart/Line_Chart";
import Alert from "components/Chart/Alert";
import NoticeList from "components/Notice/NoticeList";

export default function DashboardMain() {
  return (
    <div>
      <div className='d-flex flex-wrap gap-5'>
        <div className="line-box">
          <Line></Line>
        </div>
        
        <div className="alert-box">
          <Alert></Alert>
        </div>

        <div className='notice-list-box gap-5'>
          <NoticeList></NoticeList>
        </div>
      </div>
    </div>
  );
}