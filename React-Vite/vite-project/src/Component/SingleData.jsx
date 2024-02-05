import { useContext, useEffect, useState } from "react"
import axios, { Axios } from "axios";
import { userContext } from "../App";
import { sendFruit } from "./Array";



export default function SingleData() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromBtn, setIdFromBtn] = useState(1);

    const handleClick = () => {
        setIdFromBtn(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(err => {
                alert(err);
            })
    }, [idFromBtn])

    const user=useContext(userContext);
    const fruit= useContext(sendFruit);
    console.log(user,fruit);

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Data</button>
            <h3>{post.body}</h3>
            <h2>{user}</h2>
            <ul>{fruit.map(res=><li key={res.name}>{res.name} <b>{res.price}$</b></li>) }</ul>
        </div>
    )
}