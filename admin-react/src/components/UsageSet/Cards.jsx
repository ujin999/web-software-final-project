import React, { useState } from 'react';
import './ExplainAdminCard.css';
import MainCard from 'components/Card/MainCard';
import ApiResponseCard from 'components/Card/ApiResponseCard';
import Alert from "components/Card/Alert";
import NoticeList from 'components/Card/NoticeList';
import ServerStatusCard from 'components/Card/ServerStatusCard';
import TodoCard from 'components/Card/TodoCard';

const warnings = [
  {"id":11,"project":"User Login Fail","risk":"confirmed","endDate":"2025-05-28","done":"system"},
  {"id":12,"project":"API Timeout","risk":"unconfirmed","endDate":"2025-05-29","done":"system"},
  {"id":13,"project":"Suspicious Access","risk":"confirmed","endDate":"2025-05-30","done":"user"},
];

const noticeList = [
  { "id": 20, "title": "4월 인기 콘텐츠 안내", "writer": "마케팅팀", "date": "2025-04-30 오후 07:00", "views": 29, "important": 0 },
  { "id": 19, "title": "기능 개선 안내", "writer": "개발팀", "date": "2025-05-05 오전 08:00", "views": 21, "important": 0 },
  { "id": 18, "title": "이메일 인증 관련 공지", "writer": "고객지원", "date": "2025-05-07 오후 02:30", "views": 11, "important": 0 },
]

const initialTasks = [
  { id: 1, text: '유저 문의 확인', date: '2025-05-28', writer: '관리자', done: false },
  { id: 2, text: '공지사항 작성', date: '2025-05-27', writer: '관리자', done: true },
  { id: 3, text: '서버 상태 점검', date: '2025-05-26', writer: '관리자', done: false },
  { id: 4, text: '통계 리포트 확인', date: '2025-05-25', writer: '관리자', done: false },
];

export default function Cards() {
  const [activeTab, setActiveTab] = useState('code');
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
    {/* 시작 */}
    <div className="explain-admin">
      <h1>User Statistics Card</h1>
      <p className="explain-description">
        사용자 활동 현황과 주요 지표를 시각적으로 확인할 수 있는 통계 카드입니다.
      </p>

      <div className="alert-section">
        <MainCard title={'당일 방문자 수'} value={'100'} unit={'명'} icon={'fa-users'} color={'rgb(232, 80, 80)'}></MainCard><br />
        <MainCard title={'현재 접속자 수'} value={'50'} unit={'명'} icon={'fa-signal'} color={'rgb(13, 110, 253)'}></MainCard><br />
        <MainCard title={'신규 가입자'} value={'30'} unit={'명'} icon={'fa-user-plus'} color={'rgb(31, 148, 78)'}></MainCard><br />
        <MainCard title={'평균 체류 시간'} value={'3.7'} unit={'분'} icon={'fa-clock'}></MainCard><br />
      </div>

      <div className="code-cards">
        <div className="code-card-tabs">
          <button
            className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <span className="tab-icon">📝</span>
            Code
          </button>
          <button
            className={`tab-button ${
              activeTab === 'description' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('description')}
          >
            <span className="tab-icon">📖</span>
            Description
          </button>
        </div>

        <div className="code-card-content">
          {activeTab === 'code' && (
            <div className="code-section">
              <div className="code-header">
                <span className="code-title">Code</span>
              </div>
              <div className="code-preview">
                <pre className="code-block">
                  <code>
                    {
`<MainCard title={'당일 방문자 수'} value={'100'} unit={'명'} icon={'fa-users'} color={'rgb(232, 80, 80)'}></MainCard>
<MainCard title={'현재 접속자 수'} value={'50'} unit={'명'} icon={'fa-signal'} color={'rgb(13, 110, 253)'}></MainCard>
<MainCard title={'신규 가입자'} value={'30'} unit={'명'} icon={'fa-user-plus'} color={'rgb(31, 148, 78)'}></MainCard>
<MainCard title={'평균 체류 시간'} value={'3.7'} unit={'분'} icon={'fa-clock'}></MainCard>`}
                  </code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'description' && (
            <div className="code-section">
              <div className="code-header">
                <span className="code-title">Component Description</span>
              </div>
              <div className="description-content">
                <div className="description-item">
                  <p>
                  플랫폼의 사용자 관련 핵심 지표들을 한눈에 파악할 수 있는 통계 카드입니다.<br></br> 당일 방문자 수 100명, 현재 접속자 수 50명, 신규 가입자 30명, 평균 체류 시간 3.7분 등의 정보(예시)를 제공합니다. 각 지표는 색상으로 구분된 프로그레스 바와 아이콘으로 시각화되어 있어 관리자가 사용자 활동 패턴을 쉽게 분석할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* 시작 */}
    <div className="explain-admin">
    <h1>System Performance Card</h1>
    <p className="explain-description">
      실시간 시스템 성능 지표를 모니터링하고 분석할 수 있는 카드입니다.
    </p>

    <div className="alert-section">
      <ApiResponseCard title={'서버 응답 시간'} value={'58ms'} percentage={' 12.7%'} icon={'down'} color='red'></ApiResponseCard><br />
      <ApiResponseCard title={'CPU 사용률'} value={'71%'} percentage={'7.8%'} icon={'up'} color='rgb(59, 170, 59)'></ApiResponseCard><br />
      <ApiResponseCard title={'응답 지연 시간'} value={'91ms'} percentage={'7.8%'} icon={'up'} color='rgb(58, 44, 255)'></ApiResponseCard>
    </div>

    <div className="code-cards">
      <div className="code-card-tabs">
        <button
          className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          <span className="tab-icon">📝</span>
          Code
        </button>
        <button
          className={`tab-button ${
            activeTab === 'description' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('description')}
        >
          <span className="tab-icon">📖</span>
          Description
        </button>
      </div>

      <div className="code-card-content">
        {activeTab === 'code' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Code</span>
            </div>
            <div className="code-preview">
              <pre className="code-block">
                <code>
                  {
`<ApiResponseCard title={'서버 응답 시간'} value={'58ms'} percentage={' 12.7%'} icon={'down'} color='red'></ApiResponseCard><br />
<ApiResponseCard title={'CPU 사용률'} value={'71%'} percentage={'7.8%'} icon={'up'} color='rgb(59, 170, 59)'></ApiResponseCard><br />
<ApiResponseCard title={'응답 지연 시간'} value={'91ms'} percentage={'7.8%'} icon={'up'} color='rgb(58, 44, 255)'></ApiResponseCard>`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Component Description</span>
            </div>
            <div className="description-content">
              <div className="description-item">
                <p>
                서버의 핵심 성능 지표인 응답 시간, CPU 사용률, 응답 지연 시간을 실시간으로 모니터링할 수 있는 페이지입니다.<br /> 각 지표는 전일 대비 증감률과 함께 표시되어 성능 트렌드를 파악할 수 있습니다. 서버 응답 시간 58ms, CPU 사용률 71%, 응답 지연 시간 91ms 등의 정보(예시)를 통해 시스템 상태를 한눈에 확인할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* 시작 */}
  <div className="explain-admin">
    <h1>Alert Management</h1>
    <p className="explain-description">
      시스템 보안 경고와 사용자 활동 알림을 모니터링하고 관리하는 카드입니다.
    </p>

    <div className="alert-section">
      <Alert warnings={warnings}></Alert>
    </div>

    <div className="code-cards">
      <div className="code-card-tabs">
        <button
          className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          <span className="tab-icon">📝</span>
          Code
        </button>
        <button
          className={`tab-button ${
            activeTab === 'description' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('description')}
        >
          <span className="tab-icon">📖</span>
          Description
        </button>
      </div>

      <div className="code-card-content">
        {activeTab === 'code' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Code</span>
            </div>
            <div className="code-preview">
              <pre className="code-block">
                <code>
                  {
`const warnings = [
  {"id":11,"project":"User Login Fail","risk":"confirmed","endDate":"2025-05-28","done":"system"},
  {"id":12,"project":"API Timeout","risk":"unconfirmed","endDate":"2025-05-29","done":"system"},
  {"id":13,"project":"Suspicious Access","risk":"confirmed","endDate":"2025-05-30","done":"user"},
];

<Alert warnings={warnings}></Alert>`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Component Description</span>
            </div>
            <div className="description-content">
              <div className="description-item">
                <p>
                시스템에서 발생하는 다양한 보안 이벤트와 사용자 활동을 추적하고 관리할 수 있는 카드입니다.<br />로그인 실패, API 타임아웃, 의심스러운 접근 등의 이벤트를 확인/미확인 상태로 분류하여 관리하며, 각 알림의 발생일과 발신자 정보를 제공합니다. 관리자는 이를 통해 시스템 보안 상태를 효과적으로 모니터링할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* 시작 */}
  <div className="explain-admin">
    <h1>Notice Management Card</h1>
    <p className="explain-description">
      시스템 공지사항을 효율적으로 관리하고 게시 할 수 있는 관리자 전용 카드입니다. 
    </p>

    <div className="alert-section">
      <NoticeList notices={noticeList}></NoticeList>
    </div>

    <div className="code-cards">
      <div className="code-card-tabs">
        <button
          className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          <span className="tab-icon">📝</span>
          Code
        </button>
        <button
          className={`tab-button ${
            activeTab === 'description' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('description')}
        >
          <span className="tab-icon">📖</span>
          Description
        </button>
      </div>

      <div className="code-card-content">
        {activeTab === 'code' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Code</span>
            </div>
            <div className="code-preview">
              <pre className="code-block">
                <code>
                  {
`const noticeList = [
  { "id": 20, "title": "4월 인기 콘텐츠 안내", "writer": "마케팅팀", "date": "2025-04-30 오후 07:00", "views": 29, "important": 0 },
  { "id": 19, "title": "기능 개선 안내", "writer": "개발팀", "date": "2025-05-05 오전 08:00", "views": 21, "important": 0 },
  { "id": 18, "title": "이메일 인증 관련 공지", "writer": "고객지원", "date": "2025-05-07 오후 02:30", "views": 11, "important": 0 },
]

<NoticeList notices={noticeList}></NoticeList>`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Component Description</span>
            </div>
            <div className="description-content">
              <div className="description-item">
                <p>
                관리자가 사용자들에게 전달한 공지사항을 작성, 수정, 삭제를 할 수 있는 페이지입니다. 공지사항은 제목, 게시일 등의 정보를 포함하며, 날짜순으로 정렬되어 표시됩니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* 시작 */}
  <div className="explain-admin">
    <h1>Explain Admin</h1>
    <p className="explain-description">
      Todo list를 작성할 수 있는 카드입니다.
    </p>

    <div className="alert-section">
      <TodoCard initialTasks={initialTasks}></TodoCard>
    </div>

    <div className="code-cards">
      <div className="code-card-tabs">
        <button
          className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          <span className="tab-icon">📝</span>
          Code
        </button>
        <button
          className={`tab-button ${
            activeTab === 'description' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('description')}
        >
          <span className="tab-icon">📖</span>
          Description
        </button>
      </div>

      <div className="code-card-content">
        {activeTab === 'code' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Code</span>
            </div>
            <div className="code-preview">
              <pre className="code-block">
                <code>
                  {
`const initialTasks = [
  { id: 1, text: '유저 문의 확인', date: '2025-05-28', writer: '관리자', done: false },
  { id: 2, text: '공지사항 작성', date: '2025-05-27', writer: '관리자', done: true },
  { id: 3, text: '서버 상태 점검', date: '2025-05-26', writer: '관리자', done: false },
  { id: 4, text: '통계 리포트 확인', date: '2025-05-25', writer: '관리자', done: false },
];

<TodoCard initialTasks={initialTasks}></TodoCard>`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="code-section">
            <div className="code-header">
              <span className="code-title">Component Description</span>
            </div>
            <div className="description-content">
              <div className="description-item">
                <p>
                  다양한 작업 할 일은 카드 형태로 나타낼 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  </div>

  
  );
}
