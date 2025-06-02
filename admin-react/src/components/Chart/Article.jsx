import React, { useState } from 'react';
import './Article.css';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const Article = ({posts}) => {

  const itemsPerPage = 9;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="article-wrapper">
      <div className="article-header">
        <h2>All Articles</h2>
        {/* <select className="filter-dropdown">
          <option>This Month</option>
          <option>Last Month</option>
        </select> */}
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
              <td>{item.views}</td>
              <td>{item.date}</td>
              <td className="action-icons">
                <button className="icon view"><FaEye /></button>
                <button className="icon edit"><FaEdit /></button>
                <button className="icon delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="pagination article-custom-pagination">
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
