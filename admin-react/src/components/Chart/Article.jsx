import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Article.css';

const Article = () => {
  const initialData = [
    { id: 1, name: 'User', assignedTo: ['2'], created: '04 Mar 2023, 08:30 am', title: '글 제목' },
    { id: 2, name: 'User', assignedTo: ['3'], created: '27 Jun 2024, 12:00 am', title: '글 제목' },
    { id: 3, name: 'User', assignedTo: ['4'], created: '02 Dec 2023, 02:30 am', title: '글 제목' },
    { id: 4, name: 'User', assignedTo: ['5'], created: '27 Jun 2024, 12:00 am', title: '글 제목' },
    { id: 5, name: 'User', assignedTo: ['1'], created: '13 Aug 2024, 07:05 am', title: '글 제목' },
    { id: 6, name: 'User', assignedTo: ['3'], created: '28 Sep 2023, 01:20 pm', title: '글 제목' },
    { id: 7, name: 'User', assignedTo: ['4'], created: '10 Feb 2025, 06:00 pm', title: '글 제목' },
    { id: 8, name: 'User', assignedTo: ['2'], created: '19 Jul 2024, 09:45 pm', title: '글 제목' },
    { id: 9, name: 'User', assignedTo: ['1'], created: '05 Jan 2024, 11:00 am', title: '글 제목' },
  ];

  const [data] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('THIS MONTH');
  const itemsPerPage = 5;

  // 페이지네이션 계산
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // 필터링 로직 추가 가능 (예: API 호출)
  };

  return (
    <div className="article-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-dark">커뮤니티 최신글 조회</h5>
        <select className="form-select w-auto" value={filter} onChange={handleFilterChange}>
          <option value="THIS MONTH">THIS MONTH</option>
          <option value="LAST MONTH">LAST MONTH</option>
        </select>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>User LV</th>
            <th>Created Date & Time</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>
                {item.assignedTo.map((role, index) => (
                  <span
                    key={index}
                    className={`badge me-1 ${
                      role === '1' ? 'bg-primary' :
                      role === '2' ? 'bg-info' :
                      role === '3' ? 'bg-secondary' :
                      role === '4' ? 'bg-success' :
                      role === '5' ? 'bg-warning' : 'bg-light'
                    }`}
                  >
                    {role}
                  </span>
                ))}
              </td>
              <td>{item.created}</td>
              <td>{item.title}</td> {}
              <td>
                <button className="btn btn-link p-0 me-2">
                  <i className="bi bi-eye"></i>
                </button>
                <button className="btn btn-link p-0 me-2">
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-link p-0">
                  <i className="bi bi-trash text-danger"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Article;