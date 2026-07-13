import React, { createContext, useContext, useState } from 'react'

export const CounterContext = createContext()

// Self CounterContext

export function CounterContextProvider({children}){
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    return <CounterContext.Provider value={{count, setCount, text, setText}}>
        {children}
    </CounterContext.Provider>
}


// custome Hooks

export function useCounterContext(){
    return useContext(CounterContext)
}