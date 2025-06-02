import React from 'react';
import './NoticeList.css';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NoticeList = ({notices}) => {
  const navigate = useNavigate();

  return (
    <div className="notice-wrapper">
      <div className="notice-header">
        <div className="notice-title">NOTICE</div>
        <FaPlus
          className="notice-plus-icon"
          onClick={() => navigate('/notice')}
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
