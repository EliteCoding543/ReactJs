import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <nav 
        style={
            {
                display: "flex",
                justifyContent: "space-between",
                height: "80px",
                backgroundColor: (darkMode ? "gray" : "white")

            }
        }
      >
        <ul style={{display: "flex", listStyle: "none", gap: "20px"}}>
            <li style={{textDecoration: "none"}}><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contect-us</a></li>
            <li><a href="#">Helps</a></li>
        </ul>

        <button onClick={() => {
            setDarkMode(!darkMode)
            {darkMode ? "Light" : "Dark"}
        }}>🌚</button>
      </nav>
    </div>
  )
}

export default Navbar
