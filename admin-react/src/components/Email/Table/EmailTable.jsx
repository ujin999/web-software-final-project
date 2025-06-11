import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './EmailTable.css';

export default function EmailTable({ emails }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(emails.length / itemsPerPage);

  const currentItems = emails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container">
      {/* Pagination Controls */}
      <div className="custom-pagination d-flex justify-content-between align-items-center">
        <div className="toolbar" role="toolbar">
          <div className="custom-toolbar-btn-group btn-group mb-3">
            <button type="button" className="btn btn-light">
              <i className="fa fa-archive email-toolbar-fa"></i>
            </button>
            <button type="button" className="btn btn-light">
              <i className="fa fa-exclamation-circle email-toolbar-fa"></i>
            </button>
            <button type="button" className="btn btn-light">
              <i className="fa fa-trash email-toolbar-fa"></i>
            </button>
          </div>
        </div>

        <div className="email-list-btn-group">
          <span>
            페이지 {currentPage} / {totalPages}
          </span>
          <button
            className="btn btn-outline-primary email-move-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            이전
          </button>

          <button
            className="btn btn-outline-primary email-move-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            다음
          </button>
        </div>
      </div>

      <div className="list-group shadow-sm mb-3">
        {currentItems.map((email, _) => (
          <div
            key={email.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
              <input type="checkbox" />
              <div>
                <Link style={{textDecoration: 'none'}} to={`/email/detail/${email.id}`} className="fw-semibold">
                  {email.subject}
                </Link>
                {/* <div className="fw-semibold">{email.subject}</div> */}
              </div>
              <div className="text-muted small" style={{ maxWidth: '400px' }}>
                <p className="email-list-preview mb-0">{email.preview}</p>
              </div>
              <div className="text-muted small">{email.email}</div>
            </div>
            <div className="text-muted small">{email.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
