import React from 'react';
import './NoticeList.css';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // 👈 추가

const notices = [
  { id: 1, title: '2017년 바로 점검', date: '2017-11-22', author: '관리자' },
  { id: 2, title: '연말정산', date: '2017-11-22', author: '관리자' },
  { id: 3, title: '악성 댓글 금지요', date: '2017-11-22', author: '관리자' },
  { id: 4, title: '점검 결과', date: '2017-11-03', author: '관리자' },
];

const NoticeList = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <div className="notice-wrapper">
      <div className="notice-header">
        <div className="notice-title">NOTICE</div>
        <FaPlus
          className="notice-plus-icon"
          onClick={() => navigate('/notices')} // 클릭 시 이동
        />
      </div>
      <ul className="notice-list">
        {notices.map((notice) => (
          <li key={notice.id} className="notice-item">
            <span className="notice-text">{notice.title}</span>
            <span className="notice-meta">
              {notice.date} <span className="author">{notice.author}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeList;
