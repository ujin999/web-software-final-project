import React from "react";
import { Link } from 'react-router-dom';
import "./Alert.css";

const Alert = ({warnings}) => {
  return (
    <div className="alert-container">
      <div className="header">
        <span className="title">Alert</span>
        <Link to='/errors' className="report-btn">Report</Link>
      </div>
      <div className="task-labels">
        <span>Alert</span>
        <span>Check</span>
        <span>Date</span>
        <span>Sender</span>
      </div>
      {warnings.map((task, index) => (
        <div key={index} className="task-item">
          <span className="project-name">{task.project}</span>
          <span className={`risk ${task.risk.toLowerCase().replace(" ", "-")}`}>
            {task.risk}
          </span>
          <span className="end-date">{task.endDate}</span>
          <span className="done">{task.done}</span>
        </div>
      ))}
    </div>
  );
};

export default Alert;