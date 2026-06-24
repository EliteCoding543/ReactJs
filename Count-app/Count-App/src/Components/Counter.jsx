import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <div>{count}</div>

        <div>
            <button onClick={() =>{
                setCount(count + 1)
            }}>+</button>

            <button onClick={() => {
                setCount(0)
            }}>Rest</button>

           <button
            onClick={() => {
                if (count > 0) {
                setCount(count - 1);
                }
            }}>-
            </button>
        </div>
    </div>
  )
}

export default Counter
