import { useState } from 'react'
import Card from "./components/Card"
function App() {
  
  const users = [
  {
    name: "Shubham",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d"
  },
  {
    name: "Rahul",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    name: "Aman",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

  return (
    <>
      <div>
        {
          users.map((item) => {
          return <Card  imgSrc = {item.img} name = {item.name}/>
        })
        }
      </div>
    </>
  )
}

export default App
