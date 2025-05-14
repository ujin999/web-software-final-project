import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../img/logo192.png'

export default function Navbar() {
  return (
    <>
      <div class="app-header">
        <div className="container">
          <div className="logo-container">
            <Link className='navbar-brand' to="/">
              <img className='d-inline-block align-text-top navbar-logo' src={logoImg} alt="logo" />

              <span className='logo-text'>React Admin</span>
            </Link>
          </div>

          <div className="user-container">
            <Link></Link>
          </div>
        </div>
    </div>
  </>
  );
}