import React, { useState } from "react";

const Todo = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    onAddTodo(text);
    setText("");
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-96 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-5">
          Todo App
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={text}
            placeholder="Add Todo"
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2 outline-none"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-5 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;