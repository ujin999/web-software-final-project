import React from "react";
import "./Alert.css";

const Alert = () => {
  const tasks = [
    { project: "User Error", risk: "confirmed", endDate: "2025-09-05", done: "system" },
    { project: "New User", risk: "unconfirmed", endDate: "2025-09-08", done: "user" },
    { project: "System Error", risk: "unconfirmed", endDate: "2025-09-12", done: "system" },
    { project: "Leave User", risk: "confirmed", endDate: "2025-09-14", done: "system" },
    { project: "User LV.UP", risk: "confirmed", endDate: "2025-09-18", done: "user" },
    ];

  return (
    <div className="alert-container">
      <div className="header">
        <span className="title">Alert</span>
        <button className="report-btn">Report</button>
      </div>
      <div className="task-labels">
        <span>Alert</span>
        <span>Check</span>
        <span>Date</span>
        <span>Sender</span>
      </div>
      {tasks.map((task, index) => (
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