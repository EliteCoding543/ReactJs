import React from 'react'
import { useState } from 'react'

const Text = () => {
    const [str, setText] = useState("")
  return (
    <div>
      <input onInput={(e) => {
        setText(e.target.value)
      }} type="text" />

      <h1>{str}</h1>
    </div>
  )
}

export default Text
