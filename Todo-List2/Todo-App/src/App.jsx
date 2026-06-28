import React, { useState } from 'react'
import Todo from './component/Todo'

const App = () => {
  const [toods, setToods] = useState([]);

  const addTodo = (title) =>{
    setToods([
      ...toods,
      {
        id: Date.now(),
        title: title,
      },
    ]);
  };

  return (
    <div className='grid bg-stone-900 py-4 min-h-screen'>
      <Todo addTudo={addTodo} toods={toods}/>
    </div>
  )
}

export default App