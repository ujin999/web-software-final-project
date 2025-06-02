import React from 'react';
import './StatusCard.css';
import { FaClock } from 'react-icons/fa';

const ApiResponseCard = () => {
  return (
    <div className="status-card">
      <div className="card-header">
        <div className="icon-box">
          <FaClock />
        </div>
        <span className="card-title">API Response</span>
      </div>
      <div className="card-value">230ms</div>
      <div className="card-status negative">🔻 12.7%</div>
    </div>
  );
};

export default ApiResponseCard;
