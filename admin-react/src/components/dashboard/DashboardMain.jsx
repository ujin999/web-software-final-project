import React, { useEffect, useState } from "react";

import './DashboardMain.css'

// import Line from "components/Chart/Line_Chart";
import Alert from "components/Chart/Alert";
import NoticeList from "components/Notice/NoticeList";
import MainCard from 'components/Card/MainCard';
import DoughnutChart from 'components/Chart/Doughnut';
import LineChartV2 from 'components/Chart/Line-Chart-v2';
import LineChartV3 from 'components/Chart/Line-Chart-v3';

export default function DashboardMain() {
  // 카드 데이터
  const [CardData, setCardData] = useState(null);
  // 방문 유저 데이터
  const [totalVisitors, setTotalVisitors] = useState(null);
  // warnings 경고 데이터
  const [warnings, setWarnings] = useState([]);
  // 공지사항 리스트
  const [noticeTableList, setNoticeTalbeList] = useState([]);
  // 라인v2 차트 데이터
  const [lineV2Data, setLineV2Data] = useState({ labels: [], data: [] });
  // 라인v3 차트 데이터
  const [LineV3Data, setLineV3Data] = useState({ labels: [], data: [] });
  // 도넛 데이터
  const [doughnutData, setDoughnutData] = useState({ labels: [], data: [] });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/api/visit')
    .then(res => {
      if (!res.ok) throw new Error('네트워크 오류');
      return res.json();
    })
    .then((data) => {
      setTotalVisitors(data.totalVisitors);
      setLoading(false);
    })
    .catch(err => {
      setError('visit data error' + err.message);
      setLoading(false);
    });

    fetch('http://localhost:5001/api/dashboard')
    .then(res => {
      if (!res.ok) throw new Error('네트워크 오류');
      return res.json();
    })
    .then((CardData) => {
      setCardData(CardData);
      setLoading(false);
    })
    .catch(err => {
      setError('card data error' + err.message);
      setLoading(false);
    });

    fetch('http://localhost:5001/api/warnings')
      .then(res => {
        if (!res.ok) throw new Error('네트워크 오류');
        return res.json();
      })
      .then(data => {
        const topFive = data.slice(0, 5)
        setWarnings(topFive);
        setLoading(false);
      })
      .catch(err => {
        setError('warning data error: ' + err.message);
        setLoading(false);
      });

    fetch('http://localhost:5001/api/notices')
        .then(res => res.json())
        .then(data => {
          const topFive = data.slice(0, 5);
          setNoticeTalbeList(topFive);
        });

    fetch('http://localhost:5001/api/linev2chart')
    .then(res => res.json())
    .then(res => {
      setLineV2Data({ labels: res.labels, data: res.data });
    })
    .catch(err => console.error('LineChartV2 API error:', err));

    fetch('http://localhost:5001/api/linev3chart')
    .then(res => res.json())
    .then((res) => {
      const chartData = res.chartData;

      const labels = chartData.map(item => item.date);
      const data = chartData.map(item => item.value);

      console.log(labels);
      setLineV3Data({ labels, data });
      setLoading(false);
    })
    .catch(err => console.error('Line chart API error:', err));

    fetch('http://localhost:5001/api/doughnut')
    .then(res => res.json())
    .then(res => {
      setDoughnutData(res);
    })
    .catch(err => console.error('Doughnut API error:', err));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'당일 방문자 수'} value={totalVisitors} unit={'명'} icon={'fa-users'}></MainCard>
          </div>
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'현재 접속자 수'} value={CardData.currentUsers} unit={'명'} icon={'fa-signal'}></MainCard>
          </div>
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'신규 가입자'} value={CardData.newSignups} unit={'명'} icon={'fa-user-plus'}></MainCard>
          </div>
          <div className="col-lg-3 col-sm-6">
            <MainCard title={'평균 체류 시간'} value={CardData.avgStayTime} unit={'분'} icon={'fa-clock'}></MainCard>
          </div>
        </div>

        <div className="row">
          <div className="alert-box col-lg-6 col-sm-12">
            <Alert warnings={warnings}></Alert>
          </div>

          <div className='notice-list-box gap-5 col-lg-6 col-sm-12'>
            <NoticeList notices={noticeTableList}></NoticeList>
          </div>
        </div>

        <div className="row">
          {/* <Line className='col-lg-9 col-sm-12'></Line> */}
          <div className="linechart-box col-lg-8">
            <LineChartV2
              labels={lineV2Data.labels}
              data={lineV2Data.data}>
            </LineChartV2>
          </div>
          <div className="line-box col-lg-4 col-sm-12">
            <DoughnutChart
              labels={doughnutData.labels}
              data={doughnutData.data}>
            </DoughnutChart>
          </div>
        </div>

        <div className="row">
          <div className="linechart-box">
            <LineChartV3
              labels={LineV3Data.labels}
              data={LineV3Data.data}
            >
            </LineChartV3>
          </div>
        </div>
        
      </div>
    </div>
  );
}