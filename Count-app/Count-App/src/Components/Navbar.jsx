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
            <li><a style={{textDecoration: "none", color: "black", fontSize: "20px",}} href="#">Home</a></li>
            <li><a style={{textDecoration: "none", color: "black", fontSize: "20px",}} href="#">About</a></li>
            <li><a style={{textDecoration: "none", color: "black", fontSize: "20px",}} href="#">Service</a></li>
            <li><a style={{textDecoration: "none", color: "black", fontSize: "20px",}} href="#">Contect-us</a></li>
            <li><a style={{textDecoration: "none", color: "black", fontSize: "20px",}} href="#">Helps</a></li>
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
