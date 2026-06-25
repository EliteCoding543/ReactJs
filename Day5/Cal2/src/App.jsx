import { useState } from 'react'
import Calculator from './Components/Calculator'
import LoginFrom from './Components/LoginFrom'
import Left from './Components/Left'
import Right from './Components/Right'
import Navbar from './Components/Navbar'
import HomeContent from './Components/HomeContent'
function App() {
  const [text, setText] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  return (

    
    <>
     {/* <Calculator /> */}
     {/* <LoginFrom /> */}
     {/* <Left setText={setText}/>
     <Right text={text}/> */}
     <Navbar setDarkMode={setDarkMode} />
     <HomeContent darkMode = {darkMode}/>
    </>
  )
}

export default App
