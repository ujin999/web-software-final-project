import React, { useState } from 'react';
import './QnA.css';
import { Link } from 'react-router-dom';

const itemsPerPage = 14;

const QnA = ({qnaItems}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(qnaItems.length / itemsPerPage);

  // const sortedQnaItems = [...qnaItems].sort((a, b) => a.id - b.id);

  const currentItems = qnaItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="qna-wrapper">
      {/* <h3 className="page-title">Q&A</h3> */}
      <table className="qna-table">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>카테고리</th>
            <th>작성날짜</th>
            <th>답변</th>
          </tr>
        </thead>
        <tbody>
        {currentItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <Link to={`/qna/detail/${item.id}`} className="text-decoration-none">
                  {item.title}
              </Link>
            </td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>{item.comment}</td>
          </tr>
        ))}
        </tbody>
      </table>

      <div className="qna-footer">
        <div className="qna-search">
          {/* <input type="text" placeholder="Search" />
          <button><FaSearch /></button> */}
        </div>
        {/* <Link to="/qna/write" className="qna-write">글쓰기</Link> */}
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
