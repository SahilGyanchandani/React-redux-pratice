import { useState } from "react"
import useCounter from "../Hooks/useCounter"

export default function Counter() {
    const[count,increment,decrement,reset]= useCounter(5,2)
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <h3>Count = {count}</h3>
        </div>
    )
}