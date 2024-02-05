import { useState } from "react";

export default function Counter() {
    // debugger;
    const [count, SetCount] = useState(0);
    const [incrementBy, setIncrement] = useState(1);

    function handleIncrement() {
        SetCount(count + incrementBy);
    }

    function handleDecrement() {
        SetCount(count - incrementBy);
    }

    function incrementvalue() {
        setIncrement(incrementBy + 1);
    }

    function decrementValue() {
        setIncrement(incrementBy - 1);
    }
    return (
        <div>
            <h1>Count is : {count}</h1>
            <h3>Increment value by: {incrementBy}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={incrementvalue}>Increase Increment</button>
            <button onClick={decrementValue}>Decrease Increment</button>
        </div>
    )
}