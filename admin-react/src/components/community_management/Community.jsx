import React, { useState } from 'react';
import './Community.css';
import { FaEdit } from 'react-icons/fa';

const Community = ({users}) => {

  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="community-container">
      <div className="community-card">
        <div className="community-header">
          <h2>유저</h2>
        </div>

        <table className="community-table">
          <thead>
            <tr>
              {/* <th><input type="checkbox" /></th> */}
              <th></th>
              <th>이름</th>
              <th>ID</th>
              <th>가입날짜</th>
              <th>이메일</th>
              <th>수정</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((customer, i) => (
              <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="name-cell">
                  <span>{customer.name}</span>
                </div>
              </td>
              <td>{customer.id}</td>
              <td>{customer.date}</td>
              <td>{customer.email}</td>
              <td>
                <div className="action-icons">
                  <button><FaEdit /></button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>←</button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? 'active' : ''}
              onClick={() => changePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Community;
