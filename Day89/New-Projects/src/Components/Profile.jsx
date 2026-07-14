import React from 'react'

const Profile = () => {
    const name = "Shubham"
    const age = 23

    const Skilss = ["ReactJs", "JavaScript", "DSA", "Java"];

  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>

      {/* Expression  */}
      {age >= 18 ? <h2>{name} is Adult</h2> : <h2>{name} is Minor</h2>}

      <ul className='flex bg-blue-200 text-black gap-5'>
        {
            Skilss.map((item, index) => {
                return(
                    <li key={index} className='text-black'>{item}</li>
                )
            })
        }
      </ul>
    </>
  )
}

export default Profile
