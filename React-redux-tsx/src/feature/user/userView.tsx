import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


export default function UserView() {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error:{user.error}</div> : null}
            {!user.loading && user.users.length > 0 ?
                <ul>
                    {user.users.map((res) => (
                        <li key={res.id}>
                            {res.title}
                        </li>
                    ))}
                </ul> : null}
        </div>
    )

}