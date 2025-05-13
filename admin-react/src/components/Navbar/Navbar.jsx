import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <div class="app-header">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Active</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Link</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Link</Link>
          </li>
      </ul>
    </div>
  </>
  );
}