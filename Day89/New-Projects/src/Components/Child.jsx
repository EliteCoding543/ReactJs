import React from 'react'

const Child = ({About, city, Course, sub="Coding"}) => {
    console.log(About)
  return (
    <div className='bg-blue-100' c>
     <div className='flex text-xl text-black gap-5 flex-col'>
        {
            About.map((item) => {
                return(
                    <h1 className='flex gap-2 mb-4'>My name is : {item.name} and My age is : {item.age}</h1>
                )
            })
        }


     </div>
      <span> I'm From : {city}</span>
      <h2>I'm Doing Now : {Course}</h2>
      <h3>My Fav: {sub}</h3>
    </div>
  )
}

export default Child
