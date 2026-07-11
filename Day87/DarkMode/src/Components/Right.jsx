import React, { useContext } from 'react'
import { MyContext } from '../App'
// import { MyContext } from '../App'


const Right = () => {
  const{text, dark} = useContext(MyContext)
  return (
    <div className='w-1/2 h-90 p-6 border-l'>
      <h1 className={`text-2xl font-semibold ${dark ? "text-white border border-slate-50" : "text-black"}`}>{text}</h1>
    </div>
  )
}

export default Right
