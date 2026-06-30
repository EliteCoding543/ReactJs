import React from 'react'
import { useState, useEffect } from 'react'

const Apple = () => {
    const[count, setCount] = useState(0)

    useEffect(() => {

        const id = setInterval(() => {
            console.log("ADD")
        }, 1000)

        // Main Concept ye h return kr rha h har baar 
        return() => {
            clearInterval(id);
        }

    }, [count])

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default Apple
