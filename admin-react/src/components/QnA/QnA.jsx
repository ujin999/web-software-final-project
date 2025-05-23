import React, { useState } from 'react';
import './QnA.css';
import { FaSearch } from 'react-icons/fa';

const qnaItems = [
  { id: 1, category: '계정', title: 'QnA 문의 1번', date: '2025-11-22' },
  { id: 2, category: '회원탈퇴', title: 'QnA 문의 2번', date: '2025-11-22' },
  { id: 3, category: '이용방법', title: 'QnA 문의 3번', date: '2025-11-22' },
  { id: 4, category: '회원제재', title: 'QnA 문의 4번', date: '2025-11-22' },
  { id: 5, category: '이용방법', title: 'QnA 문의 5번', date: '2025-11-22' },
  { id: 6, category: '계정', title: 'QnA 문의 6번', date: '2025-11-22' },
  { id: 7, category: '회원탈퇴', title: 'QnA 문의 7번', date: '2025-11-22' },
  { id: 8, category: '회원제재', title: 'QnA 문의 8번', date: '2025-11-22' },
  { id: 9, category: '이용방법', title: 'QnA 문의 9번', date: '2025-11-22' },
  { id: 10, category: '계정', title: 'QnA 문의 10번', date: '2025-11-22' },
  { id: 11, category: '계정', title: 'QnA 문의 11번', date: '2025-11-22' },
  { id: 12, category: '회원탈퇴', title: 'QnA 문의 12번', date: '2025-11-22' },
  { id: 13, category: '이용방법', title: 'QnA 문의 13번', date: '2025-11-22' },
  { id: 14, category: '회원제재', title: 'QnA 문의 14번', date: '2025-11-22' },
  { id: 15, category: '계정', title: 'QnA 문의 15번', date: '2025-11-22' }
];

const itemsPerPage = 10;

const QnA = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(qnaItems.length / itemsPerPage);

  const sortedQnaItems = [...qnaItems].sort((a, b) => a.id - b.id); // ✅ 오름차순 정렬

  const currentItems = sortedQnaItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="qna-wrapper">
      <h3 className="page-title">Q&A</h3>
      <table className="qna-table">
        <thead>
          <tr>
            <th>No</th>
            <th>카테고리</th>
            <th>제목</th>
            <th>작성시간</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="qna-footer">
        <div className="qna-search">
          <input type="text" placeholder="Search" />
          <button><FaSearch /></button>
        </div>
        <button className="qna-write">글쓰기</button>
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

export default QnA;
