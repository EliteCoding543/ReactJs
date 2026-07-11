import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import Left from './Components/Left'

export const MyContext = createContext();
// console.log(MyContext)

const App = () => {
  const[text, setText] = useState("");
  const[dark, setDark] = useState(false)

  return (
    <MyContext.Provider value={{text, setText, dark, setDark}}>
        <div>
          <Navbar />
          <div className='flex mt-10 gap-2'>
            <Left text={text} setText={setText}  />
          </div>
      </div>
    </MyContext.Provider>
  )
}

export default App
