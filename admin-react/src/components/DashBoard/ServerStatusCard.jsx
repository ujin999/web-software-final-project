import React from 'react';
import './StatusCard.css';
import { FaServer } from 'react-icons/fa';

const ServerStatusCard = () => {
  return (
    <div className="status-card">
      <div className="card-header">
        <div className="icon-box">
          <FaServer />
        </div>
        <span className="card-title">Server Status</span>
      </div>
      <div className="card-value">Operational</div>
      <div className="card-status positive">🟢 Stable</div>
    </div>
  );
};

export default ServerStatusCard;
