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
      <h1>Calendar Component</h1>
      <p className="explain-description">
      캘린더 컴포넌트는 날짜와 일정을 시각적으로 관리하고 표시하기 위한 UI 요소입니다.<br></br> 사용자가 쉽게 특정 날짜를 선택하거나, 일정 이벤트를 확인 및 추가할 수 있도록 직관적인 인터페이스를 제공합니다.
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
