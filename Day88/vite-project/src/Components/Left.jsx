import React, { useState } from "react";
import { useCounterContext } from "../Utils/CounterContext";

const Left = () => {
  const { setText } = useCounterContext();
  const [input, setInput] = useState("");

  return (
    <div className="bg-gray-50 h-screen border w-1/2 flex justify-center items-center flex-col">

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-blue-700 p-2 text-black"
      />

      <button
        onClick={() => {
          if (input.trim() === "") return;

          setText((prev) => [...prev, input]);
          setInput("");
        }}
        className="px-6 py-2 bg-blue-600 text-white rounded-xl mt-5"
      >
        Add List
      </button>

    </div>
  );
};

export default Left;