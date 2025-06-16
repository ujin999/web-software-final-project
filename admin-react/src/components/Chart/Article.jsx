import React, { useState } from 'react';
import './Article.css';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Article = ({posts}) => {
  const navigate = useNavigate();

  const itemsPerPage = 9;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
  
    try {
      const response = await fetch(`http://localhost:5001/api/community/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('삭제 실패');
      }
  
      alert('글이 삭제되었습니다.');
      window.location.reload();  // 삭제 후 페이지 새로고침
    } catch (error) {
      console.error('삭제 중 오류:', error);
      alert('삭제에 실패했습니다.');
    }
  };

  const currentData = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="article-wrapper">
      <div className="article-header">
        <h4 style={{fontWeight: "700", fontSize: "23px", padding: "5px"}}>커뮤니티</h4>
        {/* <select className="filter-dropdown">
          <option>This Month</option>
          <option>Last Month</option>
        </select> */}
      </div>

      <table className="article-table">
        <thead>
          <tr>
            <th></th>
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
                <button className="icon view"
                onClick={() => navigate(`/community/detail/1`)}>
                  <FaEye />
                </button>
                <button
                  className="icon delete"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrash />
                </button>
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
