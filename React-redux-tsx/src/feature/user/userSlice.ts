import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type data = {
    id: number
    title: string
}

type InitialState = {
    loading: boolean
    users: data[]
    error: string
}

const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<data[]>) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || 'Something went wrong'
        })
    }
})

export default userSlice.reducer