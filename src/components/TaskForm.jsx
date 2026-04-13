import React, { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="task-form-container">
      <div className="input-group">
        <label>Task Name</label>
        <input 
          type="text" 
          placeholder="Enter task name..." 
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Description</label>
        <input 
          type="text" 
          placeholder="Enter task description..." 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="add-task-btn">Add Task</button>
    </div>
  );
};

export default TaskForm;