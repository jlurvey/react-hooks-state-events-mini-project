import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const initialData = {
    text: "",
    category: "Code",
  }

  const [taskData, setTaskData] = useState(initialData);

  function handleChange (e) {
    const {name, value } = e.target;
    setTaskData({...taskData, [name]: value, id: value })
    console.log(value)
  };

    function handleSubmit (e) {
      e.preventDefault();
      onTaskFormSubmit(taskData);
      console.log(taskData)
      setTaskData(initialData);
    }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={taskData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={taskData.category}>
          {categories.map((category) => (
            category === "All" ? null : <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
