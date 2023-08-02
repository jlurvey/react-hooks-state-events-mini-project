import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
/* import { v4 as uuid } from "uuid"; */

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const initialTasks = TASKS.map((task) => ({ ...task, id: task.text }));

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All")


  function handleTasksChange(newTasks) {
    setTasks(newTasks)
  };

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  };

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
    console.log(tasks)
  };

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit = {handleTaskFormSubmit}
      />
      <TaskList
        tasks={tasksToDisplay}
        deletableTasks={tasks}
        onTasksChange={handleTasksChange}
      />
    </div>
  );
}

export default App;
