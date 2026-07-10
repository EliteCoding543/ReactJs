import React, { useContext } from 'react'
import { MyContext } from '../App'

const Four = () => {
    let {firstName, lastName} = useContext(MyContext)
  return (
    <div>
      <h1>
        My First Name is : {firstName}
      </h1>

      <h2>
        My last Name is : {lastName}
      </h2>
    </div>
  )
}

export default Four