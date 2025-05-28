import React, { useState } from 'react';
import './TodoCard.css';

const initialTasks = [
  { id: 1, text: '유저 문의 확인', date: '2025-05-28', writer: '관리자', done: false },
  { id: 2, text: '공지사항 작성', date: '2025-05-27', writer: '관리자', done: true },
  { id: 3, text: '서버 상태 점검', date: '2025-05-26', writer: '관리자', done: false },
  { id: 4, text: '통계 리포트 확인', date: '2025-05-25', writer: '관리자', done: false },
];

const TodoCard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="todo-card">
      <div className="todo-header">
        <h3 className="todo-title">작업 할 일</h3>
      </div>
      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-row">
            <div className={`todo-text ${task.done ? 'done' : ''}`}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                {task.text}
              </label>
            </div>
            <div className="todo-date">{task.date}</div>
            <div className="todo-writer">{task.writer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;
