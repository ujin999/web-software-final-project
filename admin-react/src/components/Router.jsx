import { Route, Routes, Navigate } from 'react-router';
import Test from 'pages/test/Test';
import TestNew from 'pages/test/TestNew';
import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar'

import './Router.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
