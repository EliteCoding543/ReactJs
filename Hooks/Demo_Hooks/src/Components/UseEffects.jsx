import React, { useEffect, useState } from 'react'

const UseEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
      setTimeout(() => {
         setCount(count + 1)
      }, 2000)
  }, [])
  return (
    <div>
      <h1>i've Rendered {count} times!</h1>
    </div>
  )
}

export default UseEffects
