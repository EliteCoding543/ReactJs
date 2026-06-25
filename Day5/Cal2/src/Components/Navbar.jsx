import React from 'react'

const Navbar = ({setDarkMode}) => {
  return (
    <div>
      <button style={{padding: "20px 30px", border: "none", margin: "10px"}} onClick={() => setDarkMode(true)}>Dark</button>
      <button style={{padding: "20px 30px", border: "none", margin: "10px"}} onClick={() => setDarkMode(false)}>Light</button>
    </div>
  )
}

export default Navbar
