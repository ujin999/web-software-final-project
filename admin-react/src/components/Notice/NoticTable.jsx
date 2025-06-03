import React, { useState } from 'react';
import './NoticeTable.css';
import { Link } from 'react-router-dom';

const NoticeTable = ({ noticeList }) => {
  const allNotices = noticeList || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
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

  let id = 1;

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
                <Link to={`/notice/detail/${item.id}`} className="text-decoration-none">
                                  {item.title}
                              </Link>
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

      <div className="notice-table-footer">
        <div className="notice-table-search">
          {/* <input type="text" placeholder="Search" />
          <button><FaSearch /></button> */}
        </div>
        <Link to="/notice/write" className="notice-table-write">글쓰기</Link>
      </div>

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
