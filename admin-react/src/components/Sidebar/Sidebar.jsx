import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenuAndSetActive = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  
    setActiveMenu(prev => (prev === menuName ? '' : menuName));
  };
  
  const toggleMenu = (element, menuName) => {
      
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const navigate = useNavigate();

  const goToPage = (query) => {
    navigate(query); // 이동할 경로
  };
  
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-inner">
        
        <ul className="sidebar-ul list-unstyled ps-0">
          {/* 1번 Dashboard */}
          <li className="mb-1">
            <button className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={() => { 
              toggleMenu(this, 'dashboard');
              // setActiveMenu('dashboard');
              // toggleMenuAndSetActive('dashboard');
            }}>
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
                <Link to='/dashboard/main' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'dashboard-main' ? 'active' : ''}`}
                onClick={() => { 
                  toggleMenuAndSetActive('dashboard-main');
                }}>
                  <span>메인 페이지</span>
                </Link>
              </li>
              <li>
                <Link to='/dashboard/table' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'dashboard-table' ? 'active' : ''}`}
                onClick={() => { 
                  toggleMenuAndSetActive('dashboard-table');
                }}>
                  <span>테이블</span>
                </Link>
              </li>
              {/* <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>수정</span>
                </Link>
              </li> */}
            </ul>
          </div>

          {/* 2번 Dashboard */}
          <li className="mb-1">
            <button className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'user' ? 'active' : ''}`}
            onClick={() => {
              toggleMenu(this, 'user');
              // setActiveMenu('user');
              // toggleMenuAndSetActive('user');
            }}>
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
                <Link to='/user/check' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'user-data' ? 'active' : ''}`}
                  onClick={() => { 
                    toggleMenuAndSetActive('user-data');
                }}>
                  <span>사용자 데이터</span>
                </Link>
              </li>
              <li>
                <Link to='/user/management' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'user-manage' ? 'active' : ''}`}
                  onClick={() => { 
                    toggleMenuAndSetActive('user-manage');
                }}>
                  <span>사용자 관리</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3번 Dashboard */}
          <li className="mb-1">
            <button to='/qna' className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'community' ? 'active' : ''}`}
            onClick={() => {
              goToPage('/community');
              setActiveMenu('community');
              }}>
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
            {/* <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to='/community/check' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'community-management' ? 'active' : ''}`}
                    onClick={() => { 
                      toggleMenuAndSetActive('community-management');
                }}>
                  <span>커뮤니티 관리</span>
                </Link>
              </li>
              <li>
                <Link className="submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded">
                  <span>커뮤니티 조회</span>
                </Link>
              </li>
            </ul> */}
          </div>

          {/* 4번 Dashboard */}
          <li className="mb-1">
            <button className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'email' ? 'active' : ''}`}
            onClick={() => {
                toggleMenu(this, 'email')
                // toggleMenuAndSetActive('email')
              }}>
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
                <Link to='/email/list' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'email-check' ? 'active' : ''}`}
                        onClick={() => { 
                          toggleMenuAndSetActive('email-check');
                  }}>
                  <span>이메일 확인</span>
                </Link>
              </li>
              <li>
                <Link to='/email/send' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'email-form' ? 'active' : ''}`}
                      onClick={() => { 
                        toggleMenuAndSetActive('email-form');
                }}>
                  <span>이메일 쓰기</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 5번 Dashboard */}
          <li className="mb-1">
          <button to='/qna' className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'calendar' ? 'active' : ''}`}
            onClick={() => {
              goToPage('/calendar');
              setActiveMenu('calendar');
              }}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faCalendar} size='sm' />
                캘린더
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          {/* 6번 위젯 */}
          {/* <li className="mb-1">
            <button className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'widget' ? 'active' : ''}`}
              onClick={() => { 
                // toggleMenu(this, 'widget');
                // setActiveMenu('widget');
                toggleMenuAndSetActive('widget');
              }}>
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
          </div> */}

          {/* 7번 Q&A */}
          <li className="mb-1">
            <button to='/qna' className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'qna' ? 'active' : ''}`}
            onClick={() => {
              goToPage('/qna');
              setActiveMenu('qna');
              }}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faQuestionCircle} size='sm' />
                Q&A
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>

          {/* 8번 Dashboard */}
          <li className="mb-1">
            <button className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${activeMenu === 'notice' ? 'active' : ''}`}
            onClick={() => {
              goToPage('/notice');
              setActiveMenu('notice');
              }}>
              <span className='btn-text'>
                <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faBullhorn} size='sm' />
                공지사항
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
              </svg>
            </button>
          </li>
          
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
                <Link to='/usage/card' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'usage-card' ? 'active' : ''}`}
                        onClick={() => { 
                          toggleMenuAndSetActive('usage-card');
                  }}>
                  <span>카드</span>
                </Link>
              </li>
              <li>
                <Link to='/usage/table' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'usage-table' ? 'active' : ''}`}
                        onClick={() => { 
                          toggleMenuAndSetActive('usage-table');
                  }}>
                  <span>테이블</span>
                </Link>
              </li>
              <li>
                <Link to='/usage/graph' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'usage-graph' ? 'active' : ''}`}
                        onClick={() => { 
                          toggleMenuAndSetActive('usage-graph');
                  }}>
                  <span>그래프</span>
                </Link>
              </li>
              <li>
                <Link to='/usage/calendar' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'usage-calendar' ? 'active' : ''}`}
                        onClick={() => { 
                          toggleMenuAndSetActive('usage-calendar');
                  }}>
                  <span>캘린더</span>
                </Link>
              </li>
              <li>
                <Link to='/usage/form' className={`submenu-item link-body-emphasis d-inline-flex text-decoration-none rounded ${activeMenu === 'usage-form' ? 'active' : ''}`}
                        onClick={() => { 
                          toggleMenuAndSetActive('usage-from');
                  }}>
                  <span>Forms</span>
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