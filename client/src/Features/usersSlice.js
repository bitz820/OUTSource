import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("users/fetchUser", () => {
    return fetch("/login")
    .then(r => r.json())
    .then(data => data)
});

const userSlice = createSlice({
    name:"users",
    initialState: {
        entities: [],
        status: "idle"
    },
    reducers: {

    },
    extraReducers: {
        [fetchUser.pending](state){
            state.status = "loading";
        },
        [fetchUser.fulfilled](state, action){
            console.log(action.payload)
            state.entities = action.payload
            state.status = "idle";
        }
    }
})

export default userSlice.reducer