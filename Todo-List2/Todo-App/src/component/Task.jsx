import React from 'react'
import tick from '../assets/tick.png'
import untick from '../assets/untick.png'
import delete_icon from '../assets/delete.png'

const Task = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex items-center flex-1 cursor-pointer'>
            <img className='w-5' src={tick} alt="" />
            <p className='text-slate-700 ml-4 text-[18px] font-bold'>{text}</p>
        </div>

        <img src={delete_icon} alt="" className='w-5 cursor-pointer'/>
    </div>
  )
}

export default Task
