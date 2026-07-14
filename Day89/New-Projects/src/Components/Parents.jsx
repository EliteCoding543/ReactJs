import React from 'react'
import Child from './Child'

const About = [
    {
        name: "Shubham",
        age: 21,
    },

    {
        name: "Aditya",
        age: 23
    },

    {
        name: "Mohit",
        age: 25
    }


];

const Parents = () => {
  return (
    <div>
      <Child  About={About}
      city= {"Delhi"}
      Course={"MERN Stcak"}
      />
    </div>
  )
}

export default Parents