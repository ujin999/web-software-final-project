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
import DashboardMain from './dashboard/DashboardMain';
import QnA from "components/QnA/QnA";
import NoticeTable from './Notice/NoticTable';

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


/* 이메일 데이터 */
const emailData = [
  {
    subject: "주간 보고서 제출 안내",
    preview: "이번 주 보고서는 금요일 오전 10시까지 제출해주시기 바랍니다.",
    time: "오전 9:32",
    starred: false,
  },
  {
    subject: "회의 일정 변경 안내",
    preview: "내부 사정으로 회의 일정이 다음 주 화요일로 변경되었습니다.",
    time: "오전 8:45",
    starred: true,
  },
  {
    subject: "신규 가입자 통계 보고",
    preview: "5월 기준 신규 가입자 수는 총 1,240명입니다. 첨부파일을 확인하세요.",
    time: "어제",
    starred: false,
  },
  {
    subject: "서비스 점검 안내",
    preview: "금요일 자정부터 오전 4시까지 서비스 점검이 예정되어 있습니다.",
    time: "어제",
    starred: false,
  },
  {
    subject: "팀 회식 일정 설문",
    preview: "회식 가능한 날짜에 투표해주세요. 투표는 금요일까지 진행됩니다.",
    time: "5월 22일",
    starred: false,
  },
  {
    subject: "주간 보고서 제출 안내",
    preview: "이번 주 보고서는 금요일 오전 10시까지 제출해주시기 바랍니다.",
    time: "오전 9:32",
    starred: false,
  },
  {
    subject: "회의 일정 변경 안내",
    preview: "내부 사정으로 회의 일정이 다음 주 화요일로 변경되었습니다.",
    time: "오전 8:45",
    starred: true,
  },
  {
    subject: "신규 가입자 통계 보고",
    preview: "5월 기준 신규 가입자 수는 총 1,240명입니다. 첨부파일을 확인하세요.",
    time: "어제",
    starred: false,
  },
  {
    subject: "서비스 점검 안내",
    preview: "금요일 자정부터 오전 4시까지 서비스 점검이 예정되어 있습니다.",
    time: "어제",
    starred: false,
  },
  {
    subject: "팀 회식 일정 설문",
    preview: "회식 가능한 날짜에 투표해주세요. 투표는 금요일까지 진행됩니다.",
    time: "5월 22일",
    starred: false,
  },
  {
    subject: "주간 보고서 제출 안내",
    preview: "이번 주 보고서는 금요일 오전 10시까지 제출해주시기 바랍니다.",
    time: "오전 9:32",
    starred: false,
  },
  {
    subject: "회의 일정 변경 안내",
    preview: "내부 사정으로 회의 일정이 다음 주 화요일로 변경되었습니다.",
    time: "오전 8:45",
    starred: true,
  },
  {
    subject: "신규 가입자 통계 보고",
    preview: "5월 기준 신규 가입자 수는 총 1,240명입니다. 첨부파일을 확인하세요.",
    time: "어제",
    starred: false,
  },
  {
    subject: "서비스 점검 안내",
    preview: "금요일 자정부터 오전 4시까지 서비스 점검이 예정되어 있습니다.",
    time: "어제",
    starred: false,
  },
  {
    subject: "팀 회식 일정 설문",
    preview: "회식 가능한 날짜에 투표해주세요. 투표는 금요일까지 진행됩니다.",
    time: "5월 22일",
    starred: false,
  },
];

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
            {/* 대시보드 */}
            <Route path="/dashboard/main" element={<DashboardMain></DashboardMain>}></Route>

            {/* 사용자 데이터 */}
            <Route path="/user/check" element={<BasicTable />}></Route>


            {/* 커뮤니티 내용 조회 */}
            <Route path="/community/check" element={<Article />}></Route>

            {/* 이메일 */}
            <Route path="email/list" element={<EmailTable emails={emailData}></EmailTable>}></Route>
            
            <Route path="/email/send" element={<EmailSendBox />}></Route>


            {/* 캘린더 */}
            <Route path="/calendar" element={<Calendar />}></Route>

            {/* Q&A */}
            <Route path="/qna" element={<QnA></QnA>}></Route>

            {/* 공지사항 */}
            <Route path="/notice" element={<NoticeTable></NoticeTable>}></Route>
            

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
