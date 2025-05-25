import React from "react";

import './DashboardMain.css'

// import Line from "components/Chart/Line_Chart";
import Alert from "components/Chart/Alert";
import NoticeList from "components/Notice/NoticeList";
import MainCard from 'components/Card/MainCard';
import DoughnutChart from 'components/Chart/Doughnut';
import LineChartV2 from 'components/Chart/Line-Chart-v2';
import LineChartV3 from 'components/Chart/Line-Chart-v3';

export default function DashboardMain() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'당일 방문자 수'} value={'13000'} unit={'명'} icon={'fa-users'}></MainCard>
          </div>
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'현재 접속자 수'} value={'2000'} unit={'명'} icon={'fa-signal'}></MainCard>
          </div>
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'신규 가입자'} value={'50'} unit={'명'} icon={'fa-user-plus'}></MainCard>
          </div>
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'평균 체류 시간'} value={'20'} unit={'분'} icon={'fa-clock'}></MainCard>
          </div>
        </div>

        <div className="row">
          <div className="alert-box col-lg-6 col-sm-12">
            <Alert></Alert>
          </div>

          <div className='notice-list-box gap-5 col-lg-6 col-sm-12'>
            <NoticeList></NoticeList>
          </div>
        </div>

        <div className="row">
          {/* <Line className='col-lg-9 col-sm-12'></Line> */}
          <div className="linechart-box col-lg-8">
            <LineChartV2
              labels={["월", "화", "수", "목", "금", "토", "일"]}
              data={[120, 190, 300, 250, 220, 180, 240]}>
            </LineChartV2>
          </div>
          <div className="line-box col-lg-4 col-sm-12">
            <DoughnutChart
              labels={["검색엔진", "SNS", "직접 방문", "기타"]}
              data={[45, 25, 20, 10]}>
            </DoughnutChart>
          </div>
        </div>

        <div className="row">
          <div className="linechart-box">
            <LineChartV3
              labels={["월", "화", "수", "목", "금", "토", "일", "월", "화", "수", "목", "금", "토", "일", "월", "화", "수", "목", "금", "토", "일", "월", "화", "수", "목", "금", "토", "일"]}
              data={[3.2, 4.1, 2.8, 3.5, 4.0, 3.0, 3.7, 3.2, 4.1, 2.8, 3.5, 4.0, 3.0, 3.7, 3.2, 4.1, 2.8, 3.5, 4.0, 3.0, 3.7, 3.2, 4.1, 2.8, 3.5, 4.0, 3.0, 3.7]}
            >
            </LineChartV3>
          </div>
        </div>
        
        

        
      </div>
    </div>
  );
}