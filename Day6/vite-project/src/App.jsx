import React, { useState } from 'react'
import HarryApi from './Coponents/HarryApi';
import Products from './Coponents/Products';
import Navbar from './Coponents/Navbar';
import UserProfile from './Coponents/UserProfile'
import Apple from './Coponents/Apple';

const App = () => {
 const [count , setCount] = useState(0);
 const [show, setShow] = useState(true)

  return (
    <>
  {/* <div className="flex justify-center items-center h-screen">
    <div className="gap-4">
      <h1 className="font-bold text-3xl">{count}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setCount(prev => prev + 1);
          setCount(prev => prev + 1);
        }}
      >
        Increase
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(0)}
      >
        Reset
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(prev => prev - 1)}
      >
        -
      </button>
    </div>
  </div> */}
    {/* <HarryApi /> */}
    {/* <Navbar />
    <Products /> */}
    {/* <UserProfile /> */}
    <button onClick={() => {
      setShow(!show)
    }}>Toggle</button>
    {show && <Apple />}
  </>
);
}

export default App