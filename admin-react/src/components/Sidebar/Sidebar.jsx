import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    home: false,
    notice: false,
  });

  const toggleMenu = (element, menuName) => {
      
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <>
      <div className="sidebar-container text-white">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-white" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false" onClick={() => toggleMenu(this, 'home')}>
              <span className='text-white btn-text'>Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.home ? 'openMenus' : ''}`}>
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link class="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>Home1</span>
                </Link>
              </li>
              <li>
                <Link class="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>Home2</span>
                </Link>
              </li>
              <li>
                <Link class="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>Home3</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="horizon-line"></div>

          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-white" onClick={() => toggleMenu(this, 'notice')}>
              <span className='text-white btn-text'>Notice</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.notice ? 'openMenus' : ''}`}>
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link class="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>Home1</span>
                </Link>
              </li>
              <li>
                <Link class="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>Home2</span>
                </Link>
              </li>
              <li>
                <Link class="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>Home3</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="horizon-line"></div>
          
        </ul>
      </div>

      
    </>
  );
}