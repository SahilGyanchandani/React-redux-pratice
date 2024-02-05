import { useState } from "react"

export default function useCounter(initialValue = 0, value) {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(0)
    }

    return [count, increment, decrement, reset]
}