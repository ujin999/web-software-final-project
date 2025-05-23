import React, { useState } from 'react';
import './NoticeTable.css';

const allNotices = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `공지사항 ${i + 1}번`,
  writer: '관리자',
  date: '2025.05.04 14:16',
  views: Math.floor(Math.random() * 10),
  important: i + 1 === 29 || i + 1 === 30 
}));

const NoticeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const newCount = 5;

  // 중요/일반 항목 분리
  const importantNotices = allNotices.filter(n => n.important).sort((a, b) => a.id - b.id);
  const normalNotices = allNotices.filter(n => !n.important).sort((a, b) => a.id - b.id);

  // new 마크 지정: 번호 오름차순 기준 상위 newCount 개
  const normalNoticesWithNew = normalNotices.map((item, index) => ({
    ...item,
    isNew: index < newCount,
  }));

  // 1페이지에는 중요 + 나머지, 2페이지부터는 일반만
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
      <h2 className="page-title">
        공지사항 <span className="page-subtitle">회사 공지사항을 조회합니다.</span>
      </h2>
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
