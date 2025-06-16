import React, {useState} from 'react';

import Line_Chart from 'components/Chart/Line_Chart'
import LineChartV2 from 'components/Chart/Line-Chart-v2';
import LineChartV3 from 'components/Chart/Line-Chart-v3';
import UserVisitChart from 'components/Chart/UserVisitChart';

const lineData = [100, 150, 200, 400, 250, 500, 1000];

const lineV2Data = {
  "labels": ["6/9", "6/10", "6/11", "6/12", "6/13", "6/14", "6/15"],
  "data": [392, 325, 145, 390, 345, 235, 931]
};

const lineV3Data = {
  "labels": ["6/8", "6/9", "6/10", "6/11", "6/12", "6/13", "6/14", "6/15"],
  "data" : [2.8, 2.1, 3.5, 2.2, 2.3, 2.8, 2.5, 2.1],
}

const visitData = {
  '3days': [38, 42, 57, 33, 29, 65, 72, 68, 41, 39, 52, 66, 71, 62, 58, 49, 44, 59, 74, 69, 60, 48, 36, 31],
  'yesterday': [45, 54, 39, 27, 51, 63, 67, 73, 66, 61, 58, 55, 52, 50, 48, 46, 43, 41, 38, 36, 34, 31, 29, 26],
  'today': [30, 10, 18, 10, 20, 16, 31, 30, 30, 68, 60, 100, 61, 30, 60, 24, 35, 57, 22, 52, 70, 55, 40, 42]
};

export default function Graphs() {
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
    <h1>Visitor Growth Trend Analysis</h1>
    <p className="explain-description">
      일주일간 방문자 수의 증가 추세를 면적 그래프로 시각화한 분석 그래프입니다.
    </p>

    <div className="alert-section">
      <Line_Chart visitors={lineData}></Line_Chart>
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
`const lineData = [100, 150, 200, 400, 250, 500, 1000];

<Line_Chart visitors={lineData}></Line_Chart>`}
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
                일주일간 방문자 수의 성장 패턴을 면적 차트로 표현한 트렌드 분석 그래프입니다.<br />Day 1부터 Day 7까지의 데이터를 통해 전반적인 증가 추세를 확인할 수 있으며, 특히 마지막 날의 급격한 상승(1,000명 돌파)을 통해 성장 모멘텀을 파악할 수 있습니다. 면적 그래프의 시각적 효과로 누적 증가량을 직관적으로 이해할 수 있습니다.
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
    <h1>Daily Visitor Statistics</h1>
    <p className="explain-description">
      일주일간 일별 방문자 수를 막대 그래프로 시각화한 통계 그래프입니다.
    </p>

    <div className="alert-section">
      <LineChartV2 labels={lineV2Data.labels} data={lineV2Data.data}></LineChartV2>
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
`const lineV2Data = {
  "labels": ["6/9", "6/10", "6/11", "6/12", "6/13", "6/14", "6/15"],
  "data": [392, 325, 145, 390, 345, 235, 931]
};

<LineChartV2 labels={lineV2Data.labels} data={lineV2Data.data}></LineChartV2>`}
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
                7일간의 일별 방문자 수를 막대 차트로 표시한 그래프입니다. <br />각 날짜별 방문자 수의 변화를 직관적으로 파악할 수 있으며, 주말과 평일의 트래픽 차이, 특정 날짜의 급증 현상 등을 분석할 수 있습니다. 최고 1,000명에 가까운 방문자를 기록한 날부터 100명대의 저조한 날까지 다양한 패턴을 보여줍니다.
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
    <h1>Average Session Duration Analytics</h1>
    <p className="explain-description">
    사용자의 평균 체류 시간을 일별로 추적하고 분석하는 그래프입니다.
    </p>

    <div className="alert-section">
      <LineChartV3 labels={lineV3Data.labels} data={lineV3Data.data}></LineChartV3>
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
`const lineV3Data = {
  "labels": ["6/8", "6/9", "6/10", "6/11", "6/12", "6/13", "6/14", "6/15"],
  "values" : [2.8, 2.1, 3.5, 2.2, 2.3, 2.8, 2.5, 2.1],
}

<LineChartV3 labels={lineV3Data.labels} data={lineV3Data.data}></LineChartV3>`}
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
                일주일간 사용자들의 평균 체류 시간 변화를 부드러운 곡선 그래프로 표시한 분석 카드입니다.<br /> 6월 8일부터 15일까지의 데이터를 통해 사용자 참여도의 변화 패턴을 확인할 수 있으며, 최고점과 최저점을 파악하여 콘텐츠 품질이나 사용자 경험 개선 방안을 도출할 수 있습니다.
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
    <h1>Visitor Analytics</h1>
    <p className="explain-description">
    24시간 동안의 방문자 패턴을 시각적으로 분석하고 모니터링하는 그래프입니다.
    </p>

    <div className="alert-section">
      <UserVisitChart visitData={visitData}></UserVisitChart>
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
`const lineV3Data = {
  "labels": ["6/8", "6/9", "6/10", "6/11", "6/12", "6/13", "6/14", "6/15"],
  "values" : [2.8, 2.1, 3.5, 2.2, 2.3, 2.8, 2.5, 2.1],
}

<LineChartV3 labels={lineV3Data.labels} data={lineV3Data.data}></LineChartV3>`}
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
                하루 동안의 시간대별 방문자 수 변화를 라인 차트로 시각화한 분석 그래프입니다.<br ></br> 3일 전, 어제, 오늘의 데이터를 비교할 수 있으며, 총 누적 방문자 수와 함께 시간대별 트래픽 패턴을 파악할 수 있습니다. 피크 시간대와 저조한 시간대를 한눈에 확인하여 콘텐츠 배치나 마케팅 전략 수립에 활용할 수 있습니다.
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