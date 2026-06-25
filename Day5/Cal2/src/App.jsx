import { useState } from 'react'
import Calculator from './Components/Calculator'
import LoginFrom from './Components/LoginFrom'
import Left from './Components/Left'
import Right from './Components/Right'
function App() {
  const [text, setText] = useState("")
  return (

    
    <>
     {/* <Calculator /> */}
     {/* <LoginFrom /> */}
     <Left setText={setText}/>
     <Right text={text}/>
    </>
  )
}

export default App
