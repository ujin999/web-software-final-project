import React, {useState} from 'react';
import EmailDetailTest from 'components/Email/Detail/EmailDetailTest';
import UserEditForm from 'components/community_management/UserEditForm';
import { useNavigate } from "react-router-dom";
import EmailSendBox from 'components/Email/Send/EmailSendBox';
import WritePost from 'components/WritePost/WritePost';

export default function Forms() {
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
    <h1>Form Detail</h1>
    <p className="explain-description">
      상세 정보를 확인할 수 있는 페이지입니다.
    </p>

    <div className="alert-section">
      <EmailDetailTest></EmailDetailTest>
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
`const data = {
      subject: "예시 이메일 제목",
      email: "example@domain.com",
      date: "2025-06-15T09:30:00",
      preview: "이것은 이메일 미리보기입니다.",
      content: "이것은 본문 내용입니다. 실제 API 호출 없이도 화면을 구성할 수 있습니다.",
    };

<EmailDetailTest emailData={data}></EmailDetailTest>`}
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
                  Form 형식으로 사용 가능하고 데이터를 확인하는데 이용할 수 있습니다.
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
    <h1>Email Composer</h1>
    <p className="explain-description">
    사용자들에게 이메일을 작성하고 발송할 수 있는 페이지입니다.
    </p>

    <div className="alert-section">
    <EmailSendBox></EmailSendBox>
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
`<EmailSendBox></EmailSendBox>`}
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
                관리자가 사용자들에게 직접 이메일을 발송할 수 있는 이메일 작성 페이지입니다.<br></br> 받는 사람, 제목, 본문 내용을 입력할 수 있으며, 첨부파일 기능도 지원합니다. Send와 Discard 버튼을 통해 이메일 발송을 제어할 수 있어, 공지사항이나 개별 사용자 대응, 마케팅 메시지 등을 효과적으로 전달할 수 있습니다.
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
    <h1>Post Creation</h1>
    <p className="explain-description">
    새로운 게시글이나 공지사항을 작성하고 발행할 수 있는 페이지입니다.
    </p>

    <div className="alert-section">
      <WritePost></WritePost>
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
`<WritePost></WritePost>`}
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
                관리자가 새로운 게시글이나 공지사항을 작성할 수 있는 폼 페이지입니다. 제목, 작성자 선택, 본문 내용을 입력할 수 있으며, 파일 첨부 기능도 제공합니다. 작성완료와 취소 버튼을 통해 게시글 발행을 제어할 수 있으며, 사용자들에게 중요한 정보나 업데이트를 전달하는 데 사용됩니다.
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