import { useState } from "react";
import HookMouse from "./HookMouse";

export default function MouseContainer(){
    const [display,setDisplay] = useState(true)

    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {/* {display?  <HookMouse/> :!display} */}
            {display && <HookMouse/>}
        </div>
    )
}