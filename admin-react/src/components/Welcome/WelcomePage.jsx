import React from 'react';
import {
  FaCalendarAlt,
  FaRegCreditCard,
  FaChartBar,
  FaEnvelope,
  FaBars,
  FaBell,
  FaQuestionCircle,
  FaColumns,
  FaTable,
  FaFolderOpen,
  FaUsersCog,
  FaTachometerAlt,
  FaGithub,
} from 'react-icons/fa';
import { AiOutlineAliwangwang } from 'react-icons/ai';
import adminImage from './admin.png';
import alertImg from './Alert.png';
import './WelcomePage.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <AiOutlineAliwangwang size={40} />
      <div className="logo-text">껌이지 어드민</div>
    </div>
  </nav>
);

const MainPanel = () => (
  <>
    <section className="welcome-section">
      <div className="welcome-text">
        <h1>Welcome!</h1>
        <h2>GumEasy-Admin</h2>
        <div className="github-link" style={{ marginTop: '16px' }}>
          <a
            href="https://github.com/ujin999/web-software-final-project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#24292e',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            <FaGithub size={20} style={{ marginRight: '8px' }} />
            GitHub Repository
          </a>
        </div>
      </div>
      <img className="admin-image" src={adminImage} alt="Admin Preview" />
    </section>

    <section className="usage-section">
      <div className="usage-wrapper">
        <div className="usage-title">
          <h2>Explain Admin</h2>
          <p style={{ margin: '4px 0' }}>이 컴포넌트는 구조적으로 모듈화된 형태로 작성되어 있어, 별도의 수정 없이도</p>
          <p style={{ margin: '4px 0' }}>코드를 그대로 복사해 프로젝트에 붙여넣기만 하면 즉시 정상적으로 동작합니다.</p>
        </div>

        <div className="code-window">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <pre className="code-body">
            <code style={{ fontSize: '0.9rem', paddingRight: '40px', paddingLeft: '40px' }}>
              const warnings = [<br />
              &nbsp;&nbsp;&#123; id: 11, project: 'User Login Fail', risk: 'confirmed', endDate: '2025-05-28', done: 'system' &#125;,<br />
              &nbsp;&nbsp;&#123; id: 12, project: 'API Timeout', risk: 'unconfirmed', endDate: '2025-05-29', done: 'system' &#125;,<br />
              &nbsp;&nbsp;&#123; id: 13, project: 'Suspicious Access', risk: 'confirmed', endDate: '2025-05-30', done: 'user' &#125;,<br />
              &nbsp;&nbsp;&#123; id: 14, project: 'Password Reset Error', risk: 'confirmed', endDate: '2025-05-31', done: 'user' &#125;,<br />
              &nbsp;&nbsp;&#123; id: 15, project: 'User Data Missing', risk: 'unconfirmed', endDate: '2025-06-01', done: 'system' &#125;<br />
              ];<br />
              &lt;Alert warnings=&#123;warnings&#125; /&gt;
            </code>
          </pre>
        </div>

        <div className="code-window">
          <div className="code-body" style={{ paddingBottom: '40px', paddingTop: '40px', backgroundColor: '#eaecf0' }}>
            <img src={alertImg} alt="Alert Example" style={{ width: '80%', borderRadius: '6px' }} />
          </div>
        </div>
      </div>
    </section>
  </>
);

const extensions = [
  { icon: <FaCalendarAlt />, title: 'Calendar', description: '일정 및 이벤트를 관리하고 캘린더 기반 화면을 구성합니다.' },
  { icon: <FaRegCreditCard />, title: 'Card', description: '요약 정보나 동작을 간결한 UI 블록 형태로 표시합니다.' },
  { icon: <FaChartBar />, title: 'Chart', description: '데이터를 시각화하고 트렌드를 분석할 수 있는 차트를 제공합니다.' },
  { icon: <FaEnvelope />, title: 'Email', description: '알림 또는 뉴스레터를 발송하고 수신합니다.' },
  { icon: <FaBars />, title: 'Navbar', description: '상단 네비게이션 바를 관리하고 페이지 이동을 구성합니다.' },
  { icon: <FaBell />, title: 'Notice', description: '관리자용 공지사항을 등록하고 관리합니다.' },
  { icon: <FaQuestionCircle />, title: 'QnA', description: '자주 묻는 질문을 등록하고 관리합니다.' },
  { icon: <FaColumns />, title: 'Sidebar', description: '사이드바를 표시하고 메뉴를 구성합니다.' },
  { icon: <FaTable />, title: 'Table', description: '데이터를 행과 열로 정렬하여 구조화된 형태로 보여줍니다.' },
  { icon: <FaFolderOpen />, title: 'Assets', description: '정적 파일 및 업로드된 자료를 관리합니다.' },
  { icon: <FaUsersCog />, title: 'Community Management', description: '사용자 활동, 권한, 콘텐츠를 종합적으로 관리합니다.' },
  { icon: <FaTachometerAlt />, title: 'Dashboard', description: '핵심 지표와 시스템 개요를 한눈에 확인할 수 있습니다.' },
];

const ExtensionPanel = () => (
  <section className="extension-section">
    <div className="extension-wrapper">
      <h2>우리의 컴포넌트</h2>
      <p className="extension-subtitle">본 페이지는 껌이지 어드민 시스템에서 제공하는 다양한 UI 컴포넌트들을 시각적으로 소개하고, 각 기능의 목적과 활용 방안을 직관적으로 안내하기 위한 목적을 가지고 구성되었습니다. 관리자가 보다 효율적으로 서비스 환경을 운영할 수 있도록 설계된 각 구성요소들은 유연성과 재사용성을 기반으로 구축되어 있으며, 실제 업무 흐름에 맞춘 최적의 사용자 경험을 제공합니다.</p>
      <div className="extension-grid">
        {extensions.map((ext, idx) => (
          <div key={idx} className="extension-card">
            <div className="extension-icon">{ext.icon}</div>
            <h3>{ext.title}</h3>
            <p>{ext.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">© copyright 2025 - gumeasy-admin.org</div>
      <div className="footer-center">
        <div className="footer-icon"><AiOutlineAliwangwang /></div>
        <div className="footer-text">껌이지 어드민</div>
      </div>
      <div className="footer-right">
        <a href="mailto:gumsasy-admin.org">gumeasy-admin.org</a>
      </div>
    </div>
  </footer>
);

const WelcomePage = () => (
  <>
    <Navbar />
    <MainPanel />
    <ExtensionPanel />
    <Footer />
  </>
);

export default WelcomePage;
