import React, { useState } from 'react';
import './ExplainAdminCard.css';
import MainCard from 'components/Card/MainCard';
import ApiResponseCard from 'components/dashboard/ApiResponseCard';
import Alert from "components/Chart/Alert";

const warnings = [
  {"id":11,"project":"User Login Fail","risk":"confirmed","endDate":"2025-05-28","done":"system"},
  {"id":12,"project":"API Timeout","risk":"unconfirmed","endDate":"2025-05-29","done":"system"},
  {"id":13,"project":"Suspicious Access","risk":"confirmed","endDate":"2025-05-30","done":"user"},
  {"id":14,"project":"Password Reset Error","risk":"confirmed","endDate":"2025-05-31","done":"user"},
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
      <h1>Explain Admin</h1>
      <p className="explain-description">
        이 컴포넌트는 구조적으로 모듈화된 형태로 작성되어 있어, 별도의 수정
        없이도 코드를 그대로 복사해 프로젝트에 분석결과만 히면 즉시 정상적으로
        동작합니다.
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
                    Alert 컴포넌트는 시스템 경고와 알림을 표시하기 위한 재사용
                    가능한 컴포넌트입니다.
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
      이 컴포넌트는 구조적으로 모듈화된 형태로 작성되어 있어, 별도의 수정
      없이도 코드를 그대로 복사해 프로젝트에 분석결과만 히면 즉시 정상적으로
      동작합니다.
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
                  Alert 컴포넌트는 시스템 경고와 알림을 표시하기 위한 재사용
                  가능한 컴포넌트입니다.
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
      이 컴포넌트는 구조적으로 모듈화된 형태로 작성되어 있어, 별도의 수정
      없이도 코드를 그대로 복사해 프로젝트에 분석결과만 히면 즉시 정상적으로
      동작합니다.
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
`{"id":11,"project":"User Login Fail","risk":"confirmed","endDate":"2025-05-28","done":"system"},
{"id":12,"project":"API Timeout","risk":"unconfirmed","endDate":"2025-05-29","done":"system"},
{"id":13,"project":"Suspicious Access","risk":"confirmed","endDate":"2025-05-30","done":"user"},
{"id":14,"project":"Password Reset Error","risk":"confirmed","endDate":"2025-05-31","done":"user"},`}
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
                  Alert 컴포넌트는 시스템 경고와 알림을 표시하기 위한 재사용
                  가능한 컴포넌트입니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* 시작 */}
  </div>

  
  );
}
