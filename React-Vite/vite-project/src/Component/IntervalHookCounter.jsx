import { useEffect, useState } from "react"

export default function IntervalCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        const interval= setInterval(tick, 1000);

        return(()=>{
            clearInterval(interval);
        })
    },[tick])
    return (
        <div>
            {count}
        </div>
    )
}