import React, { useState } from 'react';
import './NoticeTable.css';

const allNotices = [
  {
    id: 1,
    title: '5월 서비스 점검 안내',
    writer: '관리자',
    date: '2025.05.01 10:00',
    views: 14,
    important: true
  },
  {
    id: 2,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  },
  {
    id: 3,
    title: '회원가입 관련 문제 해결법',
    writer: '고객지원',
    date: '2025.04.29 09:00',
    views: 3,
    important: false
  },
  {
    id: 4,
    title: '시스템 업그레이드 안내',
    writer: '개발팀',
    date: '2025.04.28 16:40',
    views: 25,
    important: true
  },
  {
    id: 5,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  },
  {
    id: 6,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  },
  {
    id: 7,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  },
  {
    id: 8,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  },
  {
    id: 9,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  },
  {
    id: 10,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  },
  {
    id: 11,
    title: '이벤트 참여 방법 안내',
    writer: '운영팀',
    date: '2025.04.30 18:23',
    views: 8,
    important: false
  }
];

const NoticeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const newCount = 5;

  const importantNotices = allNotices.filter(n => n.important).sort((a, b) => a.id - b.id);
  const normalNotices = allNotices.filter(n => !n.important).sort((a, b) => a.id - b.id);

  const normalNoticesWithNew = normalNotices.map((item, index) => ({
    ...item,
    isNew: index < newCount,
  }));

  const pages = [];
  const firstPage = [
    ...importantNotices,
    ...normalNoticesWithNew.slice(0, itemsPerPage - importantNotices.length),
  ];
  pages.push(firstPage);

  for (let i = itemsPerPage - importantNotices.length; i < normalNoticesWithNew.length; i += itemsPerPage) {
    pages.push(normalNoticesWithNew.slice(i, i + itemsPerPage));
  }

  const totalPages = pages.length;
  const currentItems = pages[currentPage - 1] || [];

  return (
    <div className="notice-container">
      <h2 className="page-title">공지사항</h2>
      <table className="notice-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.important ? <span className="badge badge-green">중요</span> : item.id}</td>
              <td>
                {item.title}
                {item.isNew && <span className="badge badge-blue">N</span>}
              </td>
              <td>{item.writer}</td>
              <td>{item.date}</td>
              <td>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ←
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'page-active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default NoticeTable;
