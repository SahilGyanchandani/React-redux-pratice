import { useEffect, useState } from "react"

export default function CountAndDom() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count is {count}</button>
        </div>
    )
}