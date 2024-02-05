import axios from "axios";
import { useEffect, useReducer } from "react";

const initialValue = {
    loading: true,
    error: '',
    data: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_Response':
            return {
                loading: false,
                error: '',
                data: action.payload
            }
        case 'Fetch_Error':
            return {
                loading: false,
                error: 'Something went wrong',
                data: {}
            }
        default:
            return state;
    }

}

export default function ApiFetchReducer() {
   const [state,dispatch]= useReducer(reducer,initialValue)
   console.log(state)

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>
        dispatch({type:'Fetch_Response',payload:res.data}))
    .catch(err =>
        dispatch({type:'Fetch_Error'}))
   },[])
    return (
        <div>
            {state.loading ?'loading...' : state.data.title }
            {state.error? state.error :null }
        </div>
    )
}