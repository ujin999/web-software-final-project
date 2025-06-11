import { Route, Routes, Navigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import Test from 'pages/test/Test';
import TestNew from 'pages/test/TestNew';
import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar'
import Article from './Chart/Article';
import Calendar from './Calendar/Calendar';

import './Router.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import BasicTable from './Table/Basic-Table';
import EmailSendBox from './Email/Send/EmailSendBox';
import DashboardMain from './dashboard/DashboardMain';
import QnA from "components/QnA/QnA";
import QnADetail from './QnA/QnADetail';
import NoticeTable from './Notice/NoticTable';
import Alert from "components/Chart/Alert";

// usage
import Calendars from './UsageSet/Calendars';
import Forms from './UsageSet/Forms';
import Graphs from './UsageSet/Graphs';
import Tables from './UsageSet/Tables';
import Cards from './UsageSet/Cards';

// chart-js import
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import EmailTable from './Email/Table/EmailTable';
import WritePost from './WritePost/WritePost';
import Community from './community_management/Community';
import NoticeDetail from './Notice/NoticeDetail';
import EmailDetail from './Email/Detail/EmailDetail';
import UserEditForm from './community_management/UserEditForm';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// 캘린더 데이터
const eventsTest = [
  {
    id: 0,
    title: '서버 점검',
    start: new Date(2025, 5, 5, 10, 0),
    end: new Date(2025, 5, 6, 11, 0),
    colorIndex: 0,
  },
  {
    id: 1,
    title: '개발 일정',
    start: new Date(2025, 5, 6, 9, 0),
    end: new Date(2025, 5, 9, 12, 0),
    colorIndex: 1,
  },
  {
    id: 2,
    title: '기말고사',
    start: new Date(2025, 5, 16, 9, 0),
    end: new Date(2025, 5, 20, 12, 0),
    colorIndex: 2,
  },
  {
    id: 3,
    title: 'react 클로즈 베타',
    start: new Date(2025, 5, 19, 10, 0),
    end: new Date(2025, 5, 19, 12, 0),
    colorIndex: 3,
  }
];

export default function Router() {
  // warnings 경고 데이터
  const [warnings, setWarnings] = useState([]);
  // 공지사항 리스트
  const [noticeTableList, setNoticeTalbeList] = useState([]);
  // allData 리스트
  const [allData, setAllData] = useState({});
  // qna 리스트
  const [qnaItems, setQnaItems] = useState([]);
  // user 정보 리스트
  const [users, setUsers] = useState([]);
  // community 정보 리스트
  const [posts, setPosts] = useState([]);
  // email 정보 리스트
  const [emails, setEmails] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/api/notices')
      .then(res => res.json())
      .then(data => {
        setNoticeTalbeList(data);
      });

    fetch('http://localhost:5001/api/warnings')
    .then(res => {
      if (!res.ok) throw new Error('네트워크 오류');
      return res.json();
    })
    .then(data => {
      setWarnings(data);
      setLoading(false);
    })
    .catch(err => {
      setError('warning data error: ' + err.message);
      setLoading(false);
    });

    fetch('http://localhost:5001/api/data')
    .then(res => {
      if (!res.ok) throw new Error('네트워크 오류');
      return res.json();
    })
    .then(data => {
      setAllData(data);
      setLoading(false);
    })
    .catch(err => {
      setError('warning data error: ' + err.message);
      setLoading(false);
    });

    fetch('http://localhost:5001/api/qna')
    .then(res => res.json())
    .then(result => setQnaItems(result.data))
    .catch(err => console.error(err));

    fetch('http://localhost:5001/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });

    fetch('http://localhost:5001/api/community')
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    });

    fetch('http://localhost:5001/api/emails')
    .then(res => res.json())
    .then(response => {
      setEmails(response);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const tableOptions = [
    { value: 'notices', label: '📢 공지사항' },
    { value: 'errors', label: '❗ 오류 로그' },
    { value: 'users', label: '👤 사용자 목록' },
    { value: 'community', label: '💬 커뮤니티 글'},
    { value: 'visitors', label: '📊 방문자 통계'},

  ];

  const userOptions = [
    { value: 'users', label: '👤 사용자 목록' },
  ]

  return (
    <>
      {/* * 경로 설정 */}
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <div className="main">
          <Routes>
            {/* 대시보드 */}
            <Route path="/dashboard/main" element={<DashboardMain></DashboardMain>}></Route>

            <Route path="/dashboard/table" element={<BasicTable options={tableOptions} allData={allData}></BasicTable>}></Route>

            {/* 사용자 데이터 */}
            <Route path="/user/check" element={<BasicTable options={userOptions} allData={allData} />}></Route>
            <Route path="/user/management" element={<Community users={users} />}></Route>
            <Route path="/user/edit/:id" element={<UserEditForm />}></Route>


            {/* 커뮤니티 내용 조회 */}
            <Route path="/community" element={<Article posts={posts} />}></Route>

            {/* 이메일 */}
            <Route path="email/list" element={<EmailTable emails={emails}></EmailTable>}></Route>
            
            <Route path="/email/send" element={<EmailSendBox />}></Route>
            <Route path="/email/detail/:id" element={<EmailDetail />}></Route>



            {/* 캘린더 */}
            <Route path="/calendar" element={<Calendar event={eventsTest} />}></Route>

            {/* Q&A */}
            <Route path="/qna" element={<QnA qnaItems={qnaItems}></QnA>}></Route>
            <Route path="/qna/write" element={<WritePost></WritePost>}></Route>
            <Route path="/qna/detail/:id" element={<QnADetail />} />

            {/* 공지사항 */}
            <Route path="/notice" element={<NoticeTable noticeList={ noticeTableList }></NoticeTable>}></Route>
            <Route path="/notice/write" element={<WritePost></WritePost>}></Route>
            <Route path="/notice/detail/:id" element={<NoticeDetail />} />

            {/* 에러 로그 */}
            <Route path="/errors" element={<Alert warnings={warnings}></Alert>}></Route>

            {/* 사용 방법 */}
            <Route path="/usage/card" element={<Cards></Cards>}></Route>
            <Route path="/usage/calendar" element={<Calendars></Calendars>}></Route>
            <Route path="/usage/graph" element={<Graphs></Graphs>}></Route>
            <Route path="/usage/form" element={<Forms></Forms>}></Route>
            <Route path="/usage/table" element={<Tables></Tables>}></Route>
            
            {/* <Route path="/" element={<Test />} />{' '} */}
            {/** 루트(/) 경로를 라우터로 잡아줌 */}
            <Route path="/test/new" element={<TestNew />} />
            {/** 설정된 경로를 제외한 나머지 경로로 접속한 경우 루트 페이지로 이동 */}
            <Route path="*" element={<Navigate replace to="/dashboard/main" />} />
          </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
