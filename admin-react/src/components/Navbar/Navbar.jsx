import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../img/logo192.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark px-3">

          <div className="container-fluid">
          
          <div className="logo-container">
            <Link className='navbar-brand' to="/">
              <img className='d-inline-block align-text-top navbar-logo' src={logoImg} alt="logo" />

              <span className='logo-text'>React Admin</span>
            </Link>
          </div>

        
          {/* dropdown menu */}
          <div className="dropdown">
            <button type="button" className="btn-sm btn-secondary dropdown-toggle custom-btn" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              <FontAwesomeIcon className='menu-icon btn-font-icon' icon={faCircleUser} size='2xl' color='rgb(73, 73, 73)' />
              <span>User</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li><Link className="dropdown-item" href="#">Action</Link></li>
              <li><Link className="dropdown-item" href="#">Another action</Link></li>
              <li><Link className="dropdown-item" href="#">Something else here</Link></li>
            </ul>
          </div>

        </div>
    </nav>
  </>
  );
}