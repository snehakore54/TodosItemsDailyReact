import React from "react";
import TodoItems from "./TodoItems";
import './TodoList.css'

function TodoList({ habits, updateHabit, deleteHabit }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <TodoItems
          key={habit.id}
          habit={habit}
          updateHabit={updateHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default TodoList;
