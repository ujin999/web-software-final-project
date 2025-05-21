import React, { useState } from 'react';
import './Community.css';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const Community = () => {
  const customers = [
    { name: 'Michael A. Miner', id: '#INV2540', date: '07 Jan, 2023' },
    { name: 'Theresa T. Brose', id: '#INV3924', date: '03 Dec, 2023' },
    { name: 'James L. Erickson', id: '#INV5032', date: '28 Sep, 2023' },
    { name: 'Lily W. Wilson', id: '#INV1695', date: '10 Aug, 2023' },
    { name: 'Sarah M. Brooks', id: '#INV8473', date: '22 May, 2023' },
    { name: 'Joe K. Hall', id: '#INV2150', date: '15 Mar, 2023' },
    { name: 'Ralph Hueber', id: '#INV5636', date: '15 Mar, 2023' },
    { name: 'Sarah Drescher', id: '#INV2940', date: '15 Mar, 2023' },
    { name: 'Leonie Meister', id: '#INV9027', date: '15 Mar, 2023' },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = customers.slice(
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
          <h2>All User</h2>
          <select>
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>

        <table className="community-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Customer Name</th>
              <th>Invoice ID</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((customer, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td className="name-cell">
                  <img
                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                    alt={customer.name}
                  />
                  {customer.name}
                </td>
                <td>{customer.id}</td>
                <td>{customer.date}</td>
                <td className="action-icons">
                <button><FaEye/></button>
                <button><FaEdit/></button>
                <button><FaTrash/></button>
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
