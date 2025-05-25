import React from 'react';
import './MainCard.css';

export default function MainCard({ title, unit, value, icon }) {
  return (
    <div>
        <div className="card dashboard-main-card">
          <div className="card-body card-body-dashboard">
            <p className="card-title">{title}</p>
            <span className="dashboard-main-card-icon float-left opacity-5">
              <i className={`fa ${icon}`}></i>
            </span>
            <div className="d-inline-block">
              <p className='card-value'>{value}&nbsp;<span className='card-unit'>{unit}</span></p>
            </div>
          </div>
        </div>
      </div>
  );
}
