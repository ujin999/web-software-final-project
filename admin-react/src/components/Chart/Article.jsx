import React, { useState } from 'react';
import './Article.css';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const Article = () => {
  const initialData = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `제목 ${i + 1}`,
    nickname: `유저 ${i + 1}`,
    views: Math.floor(Math.random() * 9000) + 1000,
    date: `11 May, 2025`,
  }));

  const itemsPerPage = 9;
  const totalPages = Math.ceil(initialData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = initialData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="article-wrapper">
      <div className="article-header">
        <h2>All Articles</h2>
        <select className="filter-dropdown">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      <table className="article-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Title</th>
            <th>Nickname</th>
            <th>Views</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" /></td>
              <td>{item.title}</td>
              <td>{item.nickname}</td>
              <td>{(item.views / 1000).toFixed(1)}k</td>
              <td>{item.date}</td>
              <td className="action-icons">
                <button><FaEye/></button>
                <button><FaEdit/></button>
                <button><FaTrash/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          ←
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          →
        </button>
      </div>
    </div>
  );
};

export default Article;
