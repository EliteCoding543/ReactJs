import React, { useState } from "react";
import Todo from "./Component/Todo";
import Task from "./Component/Task";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      title: text,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle }
          : todo
      )
    );
  };

  return (
    <>
      <Todo onAddTodo={addTodo} />

      <Task
        todos={todos}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </>
  );
};

export default App;