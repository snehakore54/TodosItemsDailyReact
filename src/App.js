import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodosForm from "./components/TodosForm";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(savedHabits);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const updateHabit = (id, updatedHabit) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, ...updatedHabit } : habit
    );
    setHabits(updatedHabits);
  };

  const deleteHabit = (id) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  };

  return (
    <div className="App">
      <h1>Todos List</h1>
      <TodosForm addHabit={addHabit} />
      <TodoList
        habits={habits}
        updateHabit={updateHabit}
        deleteHabit={deleteHabit}
      />
    </div>
  );
}

export default App;
