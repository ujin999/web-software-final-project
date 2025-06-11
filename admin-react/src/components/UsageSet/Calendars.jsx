import React, { useState } from 'react';
import './ExplainAdminCard.css';
import Calendar from 'components/Calendar/Calendar';

const eventsTest = [
  { id: 0, title: '서버 점검', start: new Date(2025, 5, 5, 10, 0), end: new Date(2025, 5, 6, 11, 0), colorIndex: 0 },
  { id: 1, title: '개발 일정', start: new Date(2025, 5, 6, 9, 0), end: new Date(2025, 5, 9, 12, 0), colorIndex: 1 },
  { id: 2, title: '기말고사', start: new Date(2025, 5, 16, 9, 0), end: new Date(2025, 5, 20, 12, 0), colorIndex: 2 },
  { id: 3, title: 'react 클로즈 베타', start: new Date(2025, 5, 19, 10, 0), end: new Date(2025, 5, 19, 12, 0), colorIndex: 3 }
];

export default function Calendars() {
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
    <div className="explain-admin">
      <h1>Explain Admin</h1>
      <p className="explain-description">
        이 컴포넌트는 구조적으로 모듈화된 형태로 작성되어 있어, 별도의 수정
        없이도 코드를 그대로 복사해 프로젝트에 분석결과만 히면 즉시 정상적으로
        동작합니다.
      </p>

      <div className="alert-section">
        <div className="alert-header">
          <Calendar event={eventsTest}></Calendar>
        </div>
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
`const event = [
    { id: 0, title: '서버 점검', start: new Date(2025, 5, 5, 10, 0), end: new Date(2025, 5, 6, 11, 0), colorIndex: 0 },
    { id: 1, title: '개발 일정', start: new Date(2025, 5, 6, 9, 0), end: new Date(2025, 5, 9, 12, 0), colorIndex: 1 },
    { id: 2, title: '기말고사', start: new Date(2025, 5, 16, 9, 0), end: new Date(2025, 5, 20, 12, 0), colorIndex: 2 },
    { id: 3, title: 'react 클로즈 베타', start: new Date(2025, 5, 19, 10, 0), end: new Date(2025, 5, 19, 12, 0), colorIndex: 3 }
  ];

<Calendar event={event}></Calendar> />
                    `}
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
                    📅 해당 컴포넌트는 캘린더의 색상 테마를 변경할 수 있으며, 이벤트 데이터를 전달하면 해당 일정이 캘린더에 표시됩니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
