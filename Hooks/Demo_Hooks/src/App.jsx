import React from 'react'
import UseStates from './Components/UseStates'
import UseEffects from './Components/UseEffects'
import Products from './Components/Products'
import PropsCard from './Components/PropsCard'

const App = () => {
  return (
    <div>
      {/* <UseStates />
      <UseEffects /> */}
      {/* <Products /> */}
      <PropsCard>
        <h1>Hey Props!</h1>
        <button>Click Me</button>
      </PropsCard>
    </div>
  )
}

export default App
