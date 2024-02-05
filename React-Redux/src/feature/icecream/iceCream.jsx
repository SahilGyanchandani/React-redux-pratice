import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export default function IceCreamView() {
    const numOfIceCream = useSelector((state) =>
        state.iceCream.numOfIceCream
    );
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of IceCream - {numOfIceCream}</h2>
            <button onClick={() => dispatch(ordered())}>Order IceCream </button>
            <button onClick={() => dispatch(restocked(2))}>Restock IceCream</button>
        </div>
    )
}