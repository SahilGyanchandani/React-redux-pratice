import { useEffect, useState } from "react"
import axios from 'axios'

export default function DataFetching(){
    const [post,SetPost] = useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            console.log(res)
            SetPost(res.data)
        })  
        .catch(err=>{
            console.error(err)
        })
    },[])
    return (
        <ul>
           
            {post.map(res=> (
            <li key={res.id} >
                {res.title}

            </li>))}

        </ul>
    )    
}