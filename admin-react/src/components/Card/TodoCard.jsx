import React, { useState } from 'react';
import './TodoCard.css';

const TodoCard = ({initialTasks}) => {
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
