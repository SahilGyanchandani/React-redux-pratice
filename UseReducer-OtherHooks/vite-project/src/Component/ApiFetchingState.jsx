import { useEffect, useState } from "react"
import axios from 'axios'

export default function ApiFetchState(){

    const [loader,setLoader] = useState(true)
    const [error,setError]=useState('')
    const [data,setData]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoader(false)
            setData(res.data)
            console.log(res.data);
            setError('')
        })
        .catch(err =>{
            setLoader(false)
            setError('Something went wrong')
        })
    },[])
    
    return (
        <div>
            {loader ? 'loading' : data.title}
            {error ? error :null}
        </div>
    )
}