import React, {useState} from 'react';
import BasicTable from 'components/Table/Basic-Table';
import Community from 'components/community_management/Community';
import EmailTable from 'components/Email/Table/EmailTable';
import NoticeTable from 'components/Notice/NoticTable';

const tableOptions = [
  { value: 'notices', label: '📢 공지사항' },
  { value: 'errors', label: '❗ 오류 로그' },
  { value: 'users', label: '👤 사용자 목록' },
  // { value: 'community', label: '💬 커뮤니티 글'},
  // { value: 'visitors', label: '📊 방문자 통계'},
];

const allData = {
  notices: {
    columns: ["번호", "제목", "작성자", "작성 날짜", "조회수"],
    data: [
      [1, "5월 시스템 점검 공지", "관리자", "2025-05-25", 30],
      [2, "개인정보 처리방침 변경 안내", "법무팀", "2025-05-24", 12],
      [3, "신규 기능 업데이트 안내", "개발팀", "2025-05-23", 45]
    ]
  },
  errors: {
    columns: ["Alert", "Check", "Date", "Sender"],
    data: [
      ["User Login Fail", "confirmed", "2025-05-28", "system"],
      ["API Timeout", "unconfirmed", "2025-05-29", "system"],
      ["Suspicious Access", "confirmed", "2025-05-30", "user"]
    ]
  },
  users: {
    columns: ["이름", "ID", "가입 날짜", "이메일"],
    data: [
      ["김지훈", "kzjim_21", "2024-11-22", "michael.kim@example.com"],
      ["박서연", "psy_9907", "2023-08-13", "sophie.park@example.com"],
      ["이준호", "ljh_dev", "2025-04-09", "john.lee@example.com"]
    ]
  }
};

const users = [
  { name: "신예은", id: "sye0202", date: "2025-05-19", email: "yeeun.shin@example.com" },
  { name: "송나윤", id: "nayoun_song", date: "2025-05-02", email: "nayoon.song@example.com" },
  { name: "이준호", id: "ljh_dev", date: "2025-04-09", email: "john.lee@example.com" },
];

const emails = [
  {"id":51,"subject":"긴급 회의 소집","preview":"긴급 회의가 소집되었습니다.","date":"2025-06-20","email":"teamlead@company.com","starred":false},
  {"id":50,"subject":"프로젝트 일정 변경","preview":"프로젝트 일정이 변경되었습니다.","date":"2025-06-19","email":"project.manager@example.com","starred":false},
  {"id":49,"subject":"출근 인증 안내","preview":"출근 인증 방법 안내입니다.","date":"2025-06-18","email":"hr@company.com","starred":true},
  {"id":48,"subject":"서비스 개선 제안","preview":"서비스 개선에 대한 제안을 부탁드립니다.","date":"2025-06-17","email":"feedback@company.com","starred":false},
  {"id":47,"subject":"네트워크 점검 안내","preview":"네트워크 점검 예정 안내입니다.","date":"2025-06-16","email":"it@company.com","starred":false},
  {"id":46,"subject":"계약서 서명 요청","preview":"계약서 서명을 요청합니다.","date":"2025-06-15","email":"legal@company.com","starred":false},
  {"id":45,"subject":"연간 행사 일정","preview":"연간 행사 일정을 공유합니다.","date":"2025-06-14","email":"events@company.com","starred":false},
];

const noticeTableList = [
  {"id":20,"title":"4월 인기 콘텐츠 안내","writer":"마케팅팀","date":"2025-04-30 오후 07:00","views":29,"important":0},
  {"id":19,"title":"기능 개선 안내","writer":"개발팀","date":"2025-05-05 오전 08:00","views":21,"important":0},
  {"id":18,"title":"이메일 인증 관련 공지","writer":"고객지원","date":"2025-05-07 오후 02:30","views":11,"important":0},
  {"id":17,"title":"시스템 점검 사전 안내","writer":"운영팀","date":"2025-05-08 오전 11:10","views":19,"important":0},
];

export default function Tables() {
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
    <h1>User Management</h1>
    <p className="explain-description">
    등록된 사용자들의 정보를 조회하고 관리할 수 있는 테이블입니다.
    </p>

    <div className="alert-section">
      <BasicTable options={tableOptions} allData={allData}></BasicTable>
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
`const tableOptions = [
  { value: 'notices', label: '📢 공지사항' },
  { value: 'errors', label: '❗ 오류 로그' },
  { value: 'users', label: '👤 사용자 목록' },
  // { value: 'community', label: '💬 커뮤니티 글'},
  // { value: 'visitors', label: '📊 방문자 통계'},
];

const allData = {
  notices: {
    columns: ["번호", "제목", "작성자", "작성 날짜", "조회수"],
    data: [
      [1, "5월 시스템 점검 공지", "관리자", "2025-05-25", 30],
      [2, "개인정보 처리방침 변경 안내", "법무팀", "2025-05-24", 12],
      [3, "신규 기능 업데이트 안내", "개발팀", "2025-05-23", 45]
    ]
  },
  errors: {
    columns: ["Alert", "Check", "Date", "Sender"],
    data: [
      ["User Login Fail", "confirmed", "2025-05-28", "system"],
      ["API Timeout", "unconfirmed", "2025-05-29", "system"],
      ["Suspicious Access", "confirmed", "2025-05-30", "user"]
    ]
  },
  users: {
    columns: ["이름", "ID", "가입 날짜", "이메일"],
    data: [
      ["김지훈", "kzjim_21", "2024-11-22", "michael.kim@example.com"],
      ["박서연", "psy_9907", "2023-08-13", "sophie.park@example.com"],
      ["이준호", "ljh_dev", "2025-04-09", "john.lee@example.com"]
    ]
  }
};

<BasicTable options={tableOptions} allData={allData}></BasicTable>`}
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
                플랫폼에 가입한 사용자들의 상세 정보를 테이블 형태로 관리하는 페이지입니다.<br></br> 사용자의 이름, ID, 가입일, 이메일 정보를 확인할 수 있으며, 각 사용자별로 수정 버튼을 통해 정보를 관리할 수 있습니다. 페이지네이션 기능을 제공하여 대량의 사용자 데이터를 효율적으로 탐색할 수 있으며, 사용자 계정 관리 및 고객 지원에 활용할 수 있습니다.
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
    <h1>Email Management</h1>
    <p className="explain-description">
    발송된 이메일들을 목록으로 관리하고 추적할 수 있는 페이지입니다.
    </p>

    <div className="alert-section">
      <Community users={users} />
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
`const users = [
  { name: "신예은", id: "sye0202", date: "2025-05-19", email: "yeeun.shin@example.com" },
  { name: "송나윤", id: "nayoun_song", date: "2025-05-02", email: "nayoon.song@example.com" },
  { name: "이준호", id: "ljh_dev", date: "2025-04-09", email: "john.lee@example.com" },
];

<Community users={users}></Community>`}
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
                발송된 모든 이메일을 체크박스와 함께 목록으로 관리할 수 있는 페이지입니다.<br /> 각 이메일의 제목, 미리보기, 발송일, 수신자 이메일 주소가 표시되며, 일괄 선택 및 개별 선택이 가능합니다. 이전/다음 페이지 네비게이션을 제공하여 대량의 이메일 데이터를 효율적으로 탐색할 수 있으며, 이메일 발송 이력을 체계적으로 관리할 수 있습니다.
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
    <h1>Notice Table</h1>
    <p className="explain-description">
    이 컴포넌트는 관리자 페이지 등에서 공지사항 목록을 보여주기 위해 사용되는 테이블 컴포넌트입니다.<br></br>
    공지사항 제목, 작성자, 작성일자, 조회수 등의 정보를 표 형태로 제공하며, 중요 공지에는 별도 표시를 추가할 수 있습니다.
    </p>

    <div className="alert-section">
      <EmailTable emails={emails}></EmailTable>
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
`const emails = [
  {"id":51,"subject":"긴급 회의 소집","preview":"긴급 회의가 소집되었습니다.","date":"2025-06-20","email":"teamlead@company.com","starred":false},
  {"id":50,"subject":"프로젝트 일정 변경","preview":"프로젝트 일정이 변경되었습니다.","date":"2025-06-19","email":"project.manager@example.com","starred":false},
  {"id":49,"subject":"출근 인증 안내","preview":"출근 인증 방법 안내입니다.","date":"2025-06-18","email":"hr@company.com","starred":true},
  {"id":48,"subject":"서비스 개선 제안","preview":"서비스 개선에 대한 제안을 부탁드립니다.","date":"2025-06-17","email":"feedback@company.com","starred":false},
  {"id":47,"subject":"네트워크 점검 안내","preview":"네트워크 점검 예정 안내입니다.","date":"2025-06-16","email":"it@company.com","starred":false},
  {"id":46,"subject":"계약서 서명 요청","preview":"계약서 서명을 요청합니다.","date":"2025-06-15","email":"legal@company.com","starred":false},
  {"id":45,"subject":"연간 행사 일정","preview":"연간 행사 일정을 공유합니다.","date":"2025-06-14","email":"events@company.com","starred":false},
]

<EmailTable emails={emails}></EmailTable>`}
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
  📌 컴포넌트 설명{'\n\n'}<br />
  - NoticeTable 컴포넌트는 공지사항 데이터를 표 형식으로 표시합니다.{'\n'}<br />
  - 각 행은 공지사항의 id, title, writer, date, views, important 속성으로 구성됩니다.{'\n'}<br />
  - 중요 공지(important: 1)에는 'NEW' 뱃지를 표시하여 사용자의 시선을 끌 수 있습니다.{'\n'}<br />
  - 페이징 처리 및 글쓰기 버튼이 포함되어 있어 확장성이 높습니다.{'\n\n'}<br /><br />
  ⚙️ 주요 Props{'\n'}<br />
  - noticeTableList: 공지 데이터 배열{'\n'}<br />
    - 타입: Array{'<'}{`{`} id: number, title: string, writer: string, date: string, views: number, important: number {'}'}{'>'}{'\n'}<br />
    - 설명: 공지사항 리스트 데이터
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
    <h1>Notice Component</h1>
    <p className="explain-description">
    공지사항 컴포넌트는 사용자에게 중요한 정보나 업데이트 내용을 효과적으로 전달하기 위해 설계된 UI 요소입니다.<br></br> 일반적으로 제목과 간단한 설명, 그리고 상세 내용을 포함하여 공지사항을 명확하고 읽기 쉽게 표현합니다.
    </p>

    <div className="alert-section">
      <NoticeTable noticeList={ noticeTableList }></NoticeTable>
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
`const noticeTableList = [
  {"id":20,"title":"4월 인기 콘텐츠 안내","writer":"마케팅팀","date":"2025-04-30 오후 07:00","views":29,"important":0},
  {"id":19,"title":"기능 개선 안내","writer":"개발팀","date":"2025-05-05 오전 08:00","views":21,"important":0},
  {"id":18,"title":"이메일 인증 관련 공지","writer":"고객지원","date":"2025-05-07 오후 02:30","views":11,"important":0},
  {"id":17,"title":"시스템 점검 사전 안내","writer":"운영팀","date":"2025-05-08 오전 11:10","views":19,"important":0},
];

<NoticeTable noticeList={ noticeTableList }></NoticeTable>`}
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
                공지사항 컴포넌트는 사용자에게 중요한 정보나 업데이트 내용을 효과적으로 전달하기 위해 설계된 UI 요소입니다.<br /> 일반적으로 제목과 간단한 설명, 그리고 상세 내용을 포함하여 공지사항을 명확하고 읽기 쉽게 표현합니다.
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