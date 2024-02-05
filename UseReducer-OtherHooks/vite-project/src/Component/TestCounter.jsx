import { useContext } from "react"
import { countContext } from "./UseReducerCounter"

export default function TestCounter( ){
    const values= useContext(countContext)
    return(
        <div>
            <button onClick={()=>values.countDispatch('increment')}>Increment</button>
            <button onClick={()=>values.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>values.countDispatch('reset')}>Reset</button>
            <h2>{values.countState}</h2>
        </div>
    )
}