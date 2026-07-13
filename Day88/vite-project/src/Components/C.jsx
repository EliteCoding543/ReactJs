import React from 'react'
import { useCounterContext } from '../Utils/CounterContext'

const C = () => {
    const{count} = useCounterContext()
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default C
