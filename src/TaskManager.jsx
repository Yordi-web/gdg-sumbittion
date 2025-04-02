import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    if (!taskTitle) return;
    const newTask = { id: Date.now(), title: taskTitle };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const handleUpdateTask = (id, newTitle) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Task Manager</h2>
      <form onSubmit={handleAddTask}>
        <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) => handleUpdateTask(task.id, e.target.value)}
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;