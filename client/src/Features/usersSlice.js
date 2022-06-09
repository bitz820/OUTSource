const initialState = {
    user: {}
}

const createSignUp = (user) => {
    return function (dispatch) {
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => dispatch({ type: "signup", payload: user}))
                }else {
                    r.json().then(err => console.log(err))
                }
            })
    }
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

const handleLogout = user => {
    return function (dispatch) {
        fetch("logout", { method: "DELETE" })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => dispatch({ type: "logout", payload: user }))
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
        case "logout":
            return {
                ...state,
                user: action.payload
            }
        case "signup":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer
export { fetchLogin, handleLogout, createSignUp }










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