import React, { useState } from "react";
import './TodosForm.css'

function TodosForm({ addHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      addHabit({ id: Date.now(), name: habitName, completed: false });
      setHabitName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default TodosForm;
