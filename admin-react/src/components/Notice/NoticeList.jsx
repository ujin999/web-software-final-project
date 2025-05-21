import React from 'react';
import './NoticeList.css';

const notices = [
  { id: 1, title: '2017년 바로 점검', date: '2017-11-22', author: '관리자' },
  { id: 2, title: '연말정산', date: '2017-11-22', author: '관리자' },
  { id: 3, title: '악성 댓글 금지요', date: '2017-11-22', author: '관리자' },
  { id: 4, title: '점검 결과', date: '2017-11-03', author: '관리자' },
];

const NoticeList = () => {
  return (
    <div className="notice-wrapper">
      <h3 className="notice-title">NOTICE</h3>
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
