import React from 'react'
import { useState } from 'react'

const UseStates = () => {
    const [count, setCount] = useState(0);

    const IncrementCount = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncrementCount}>
           Increment by 4
     </button>
    </div>
  )
}

export default UseStates
