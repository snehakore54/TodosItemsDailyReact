import React from "react";
import './TodoItems.css'

function TodoItems({ habit, updateHabit, deleteHabit }) {
  const handleComplete = () => {
    updateHabit(habit.id, { completed: true });
  };

  const handleMiss = () => {
    updateHabit(habit.id, { completed: false });
  };

  const handleDelete = () => {
    deleteHabit(habit.id);
  };

  return (
    <div className="habit-item">
      <span>{habit.name}</span>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleMiss}>Miss</button>
      <button onClick={handleDelete}>Delete</button>
      <div>Status: {habit.completed ? "Completed" : "Missed"}</div>
    </div>
  );
}

export default TodoItems;
