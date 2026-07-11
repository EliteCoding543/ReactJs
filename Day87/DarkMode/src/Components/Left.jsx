import React, { useContext } from 'react'
import Right from './Right'
import { MyContext } from '../App'
// import { MyContext } from '../App'

const Left = () => {
  const {text , setText, dark, setDark} = useContext(MyContext)
  return (
    <div className={`m-10 flex w-full ${dark ? "bg-black border-yellow-300 border-5" : "bg-white border"}`}>
      <div className='w-1/2 flex justify-center items-center'>
        <input className={`w-1/2 h-10 border ${dark ? "border border-slate-50" : "border"}`} type="text" 
         onChange={(e) => setText(e.target.value)}
        />
    </div>

    <Right />
    </div>
    
  )
}

export default Left
