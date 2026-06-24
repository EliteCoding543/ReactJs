import React from 'react'
import Counter from './Components/Counter'
import Text from "./Components/Text.jsx"
import Navbar from './Components/Navbar.jsx'

function App(){
    return (
      <>
        <Navbar />
        <h1>Counter App</h1>
        <Counter />
        <Text />
      </>
    )

}

export default App