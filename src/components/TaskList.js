import React from "react";
import Task from "./Task";
/* import { v4 as uuid } from "uuid"; */


function TaskList({ tasks, onTasksChange, deletableTasks }) {

  function handleDeleteTask(text) {
    const newTasks = deletableTasks.filter((task) => task.text !== text)
    onTasksChange(newTasks);
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDeleteTask={handleDeleteTask}
        ></Task>
      ))}
    </div>
  );
}

export default TaskList;
