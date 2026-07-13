import React from "react";
import { useCounterContext } from "../Utils/CounterContext";

const Right = () => {
  const { text } = useCounterContext();

  return (
    <div className="border border-black w-1/2 p-5 flex justify-center items-center flex-col">
      <ul>
        {text.map((item, index) => (
          <li key={index} className=" bg-gray-100 border rounded-lg px-4 py-2 text-black shadow-sm mb-5">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Right;