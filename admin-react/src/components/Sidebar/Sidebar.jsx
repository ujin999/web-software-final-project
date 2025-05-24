import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faUser, faPager, faEnvelope, faCalendar, faTools, faQuestionCircle, faBullhorn, faTasks } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    dashboard: false,
    user: false,
    community: false,
    email: false,
    calendar: false,
    widget: false,
    QnA: false,
    announcement: false,
    usage: false,
  });

  const toggleMenu = (element, menuName) => {
      
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-inner">
        
        <ul className="sidebar-ul list-unstyled ps-0">
          {/* 1번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" onClick={() => toggleMenu(this, 'dashboard')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faColumns} size='sm' />
                대시보드
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.dashboard ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>메인 페이지</span>
                </Link>
              </li>
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>테이블</span>
                </Link>
              </li>
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>수정</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 2번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'user')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faUser} size='sm' />
                사용자
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.user ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to='/user/check' className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>사용자 데이터</span>
                </Link>
              </li>
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>사용자 관리</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'community')}>
              <span className='btn-text'>
              <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faPager} size='sm' />
                커뮤니티
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.community ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to='/community/check' className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>커뮤니티 관리</span>
                </Link>
              </li>
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>커뮤니티 조회</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'email')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faEnvelope} size='sm' />
                이메일
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.email ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>이메일 확인</span>
                </Link>
              </li>
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>이메일 쓰기</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 5번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'calendar')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faCalendar} size='sm' />
                캘린더
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.calendar ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to='/calendar' className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>캘린더</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 6번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'widget')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faTools} size='sm' />
                위젯
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.widget ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>위젯</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 7번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'QnA')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faQuestionCircle} size='sm' />
                Q&A
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.QnA ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>Q&A</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 8번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'announcement')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faBullhorn} size='sm' />
                공지사항
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.announcement ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>공지사항</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 9번 Dashboard */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" onClick={() => toggleMenu(this, 'usage')}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faTasks} size='sm' />
                사용방법
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          <div className={`submenu ${openMenus.usage ? 'openMenus' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>사용방법</span>
                </Link>
              </li>
            </ul>
          </div>

        </ul>
        </div>
      </div>

      
    </>
  );
}