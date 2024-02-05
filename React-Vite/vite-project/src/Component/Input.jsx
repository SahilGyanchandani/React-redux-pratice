import { useState } from "react";

export default function Input() {

    const [name, setName] = useState({ fruitName: "", vegName: "" });
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return (<div>
        <form>
            <input type="text" placeholder="Enter Fruit Name" value={name.fruitName} onChange={(e) => setName({...name,fruitName:e.target.value})}></input>
            <input type="text" placeholder="Enter Vegetable Name" value={name.vegName} onChange={(e)=> setName({...name,vegName:e.target.value})}></input>
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
    </div>)
}