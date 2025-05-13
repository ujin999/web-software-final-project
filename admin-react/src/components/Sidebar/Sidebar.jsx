import React from 'react';
import { Link } from 'react-router-dom';
import 'components/Sidebar/Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column p-3 text-white bg-dark vh-100" style={{ width: '250px' }}>
      <h2 className="text-center mb-4">MyApp</h2>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">홈</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link text-white">소개</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link text-white">연락처</Link>
        </li>
      </ul>
    </div>
  );
}