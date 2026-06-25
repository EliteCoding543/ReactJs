import React from 'react'

const Left = ({ setText }) => {
  return (
    <div style={{ width: "40vw" }}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Left