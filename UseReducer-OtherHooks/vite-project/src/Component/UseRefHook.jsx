import { useEffect, useRef } from "react"

export default function UseRef() {

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} ></input>
        </div>
    )
}