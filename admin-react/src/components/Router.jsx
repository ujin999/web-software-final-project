import { Route, Routes, Navigate } from 'react-router';
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

export default function Router() {
  return (
    <>
      {/* * 경로 설정 */}
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <div className="main">
          <Routes>
            {/* 사용자 데이터 */}
            <Route path="/user/check" element={<BasicTable />}></Route>


            {/* 커뮤니티 내용 조회 */}
            <Route path="/community/check" element={<Article />}></Route>

            {/* 이메일 쓰기 */}
            <Route path="/email/send" element={<EmailSendBox />}></Route>


            {/* 캘린더 */}
            <Route path="/calendar" element={<Calendar />}></Route>

            
            

            <Route path="/" element={<Test />} />{' '}
            {/** 루트(/) 경로를 라우터로 잡아줌 */}
            <Route path="/test/new" element={<TestNew />} />
            {/** 설정된 경로를 제외한 나머지 경로로 접속한 경우 루트 페이지로 이동 */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
