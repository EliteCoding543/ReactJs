import React, { useState } from 'react'
import Todo_logo from '../assets/Todo-logo.png'
import Task from './Task'

const Todo = ({addTudo, toods}) => {
    const [title, setTitle] = useState('');
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-13.5 rounded-xl'>
      
      {/* Title List Here */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={Todo_logo} alt="" />
        <h1 className='text-3xl font-bold'>To-Do Lists</h1>
      </div>

      {/* Input Fild and Button */}

      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
       <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
            type="text"
            placeholder="Add your Task"
        />


        <button 
        onClick={() => {
            setTitle('');
            addTudo(title)
        }}
        className='border-none bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer rounded-full'>
            Add +
        </button>

      </div>


      {/* Todo List Item  */}

      <div>
        {toods.map((todo) => (
            <Task
            key={todo.id}
            text={todo.title}
            />
        ))}
     </div>
    </div>
  )
}

export default Todo