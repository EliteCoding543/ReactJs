import React, { useState } from "react";

const Task = ({ todos, onDelete, onEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className="flex justify-center mt-6">
      <div className="w-96 bg-white shadow-lg rounded-lg p-4">

        {todos.length === 0 ? (
          <p className="text-center text-gray-500">
            No Todos Found
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center border-b py-3"
            >
              {editId === todo.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) =>
                      setEditText(e.target.value)
                    }
                    className="border px-2 py-1 rounded"
                  />

                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => {
                      onEdit(todo.id, editText);
                      setEditId(null);
                    }}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <p>{todo.title}</p>

                  <div className="flex gap-2">

                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                      onClick={() => {
                        setEditId(todo.id);
                        setEditText(todo.title);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => onDelete(todo.id)}
                    >
                      Delete
                    </button>

                  </div>
                </>
              )}
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Task;