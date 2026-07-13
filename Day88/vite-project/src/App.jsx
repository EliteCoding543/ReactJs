import React, { useContext } from 'react'
import C from './Components/C'
import { useCounterContext } from './Utils/CounterContext'
import Left from './Components/Left'
import Right from './Components/Right'

const App = () => {
  const{count, setCount, text, setText} = useCounterContext()
  return (
    <div className='bg-gray-800 text-4xl text-white'>
       <button onClick={() => {
        setCount(count + 1)
       }}>+</button>
       <C />

       <div className='flex gap-5 bg-gray-50'>
        <Left />
        <Right />
       </div>
    </div>

  )
}

export default App
