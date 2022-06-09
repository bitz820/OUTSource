const initialState = {
    user: {}
}

const fetchLogin = (user) => {
    return function (dispatch) {
        fetch("/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => dispatch({ type: "login", payload: user }))
                }
                else {
                    r.json().then(err => console.log(err))
                }
            })
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer
export { fetchLogin }










// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

// export const fetchUser = createAsyncThunk("users/fetchUser", () => {
//     return fetch("/login")
//     .then(r => r.json())
//     .then(data => data)
// });

// const userSlice = createSlice({
//     name:"users",
//     initialState: {
//         entities: [],
//         status: "idle"
//     },
//     reducers: {

//     },
//     extraReducers: {
//         [fetchUser.pending](state){
//             state.status = "loading";
//         },
//         [fetchUser.fulfilled](state, action){
//             console.log(action.payload)
//             state.entities = action.payload
//             state.status = "idle";
//         }
//     }
// })

// export default userSlice.reducer