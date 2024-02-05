import { useReducer } from "react"
import TestCounter from "./TestCounter";
import React from "react";

export const countContext=React.createContext();
const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialValue
        default:
            return state

    }

}

export default function ReducerCounter() {

    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <h2>{count}</h2>    
            <countContext.Provider value={{countState:count,countDispatch:dispatch}}> 
                <TestCounter/>
            </countContext.Provider>
        </div>)
}