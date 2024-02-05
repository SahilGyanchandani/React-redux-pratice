import { ordered, restocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function IceCreamView() {
    const numOfIceCream = useAppSelector((state) =>
        state.iceCream.numOfIceCream
    );
    const dispatch = useAppDispatch()
    return (
        <div>
            <h2>No of IceCream - {numOfIceCream}</h2>
            <button onClick={() => dispatch(ordered())}>Order IceCream </button>
            <button onClick={() => dispatch(restocked(2))}>Restock IceCream</button>
        </div>
    )
}