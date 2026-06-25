import React from 'react'

const HomeContent = ({darkMode}) => {
  return (
    <div style={{
        backgroundColor: (darkMode == true ? "black" : "white"),
        color : (darkMode == true ? "white" : "black"),
        width: "100%",
        height: "60vh",
        lineHeight: "3.2"
    }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae repudiandae libero delectus eaque aspernatur impedit facilis necessitatibus temporibus dolores explicabo neque tempore, enim ut nobis doloremque consequuntur totam assumenda soluta animi? Harum deserunt iste eaque quibusdam placeat illum ullam expedita officia, voluptatum explicabo, quia, enim quis omnis ea molestiae!
    </div>
  )
}

export default HomeContent
