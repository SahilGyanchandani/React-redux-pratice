import Counter from "./Counter";
import Hello from "./Hello";

// export default function ConditionComponent() {
//     let message;
//     const display = false;

//     if (display) {
//       message= <Hello/>
//     }
//     else {
//         message=<Counter/>
//     }

//     return message;
// }

export default function ConditionComponent(){
    let display= false;

    return display ? <Hello/> : <Counter/>
}