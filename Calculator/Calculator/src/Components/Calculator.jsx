import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState("");
    const handleClick = (value) =>{
       setInput(input + value)
    }

    const clear = () =>{
        setInput("")
    }

    const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className='bg-gray-800 text-white w-screen h-screen flex justify-center items-center'>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-80">
        <h1 className='font-bold text-2xl text-center mb-4'>Calculator</h1>
      

      <input type="text"
         value= {input}
         readOnly
         className='w-full p-3 mb-4 rounded bg-gray-700 text-right text-2xl'
      />

      {/* Calculator All Buttons  */}

      <div className="grid grid-cols-4 gap-2">
         <button className="bg-red-500 p-3 rounded" onClick={clear}>Clear</button>

         <button className="bg-gray-700 p-3 rounded" onClick={() => {
            handleClick("/")
         }}>
            /
        </button>
         <button 
            className="bg-gray-700 p-3 rounded" onClick={() => {
            handleClick("*")
         }}>
            *
        </button>
         <button onClick={() => {
            handleClick("-")
         }} 
         className="bg-gray-700 p-3 rounded">
            -
        </button>
         <button onClick={() => {handleClick("7")}} className="bg-gray-700 p-3 rounded">7</button>
         <button onClick={() => {handleClick("8")}} className="bg-gray-700 p-3 rounded">8</button>
         <button onClick={() => {handleClick("9")}} className="bg-gray-700 p-3 rounded">9</button>

         <button onClick={() => {
            handleClick("+")
         }} className="bg-gray-700 p-3 rounded">
            +
         </button>

         <button onClick={() => {
            handleClick("4")
         }} className="bg-gray-700 p-3 rounded">4</button>
         <button onClick={() => {
            handleClick("5")
         }} className="bg-gray-700 p-3 rounded">5</button>
         <button onClick={() => {
            handleClick("6")
         }} className="bg-gray-700 p-3 rounded">6</button>
         <button onClick={() => {
            handleClick("1")
         }} className="bg-gray-700 p-3 rounded">1</button>
         <button onClick={() => {
            handleClick("2")
         }} className="bg-gray-700 p-3 rounded">2</button>
         <button onClick={() => {
            handleClick("3")
         }} className="bg-gray-700 p-3 rounded">3</button>

         <button  onClick={() => {handleClick("0")}}
         className="bg-gray-700 p-3 rounded col-span-2">
            0
        </button>

        <button onClick={() => {handleClick(".")}}
        className="bg-gray-700 p-3 rounded">
            .
        </button>

         <button onClick={calculate} className="bg-blue-500 p-3 rounded">
            =
        </button>
      </div>
    </div>
    </div>
  );
}

export default Calculator