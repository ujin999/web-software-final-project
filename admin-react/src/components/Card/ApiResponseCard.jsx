import React from 'react';
import './StatusCard.css';
import { FaClock} from 'react-icons/fa';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

import './ApiResponseCard.css';

const iconMap = {
  up: AiFillCaretUp,
  down: AiFillCaretDown,
};

const ApiResponseCard = ({title, value, percentage, icon, color='black'}) => {

  const IconComponent = iconMap[icon];

  return (
    <div className="status-card">
      <div className="card-header">
        <div className="icon-box">
          <FaClock />
        </div>
        <span className="card-title">{title}</span>
      </div>
      <div className="card-value">
        <span>{value}</span>
        <span style={{color: color}} className="card-status negative">{IconComponent ? <IconComponent /> : null}{percentage}</span>
        {/* <span className="card-status negative">🔻 12.7%</span> */}
      </div>
    </div>
  );
};

export default ApiResponseCard;
