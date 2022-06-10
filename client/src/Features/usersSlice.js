
const initialState = {}

const setUser = () => {
    return function (dispatch) {
        fetch("/me")
            .then(r => {
                if (r.ok) {
                    r.json().then(user => dispatch({ type: "login", payload: user }))
                } else {
                    r.json().then(err => console.log(err))
                }
            })
    }
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
                    r.json().then(user => dispatch({ type: "signup", payload: user }))
                } else {
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

const logoutUser = (user) => {
    return function (dispatch) {
        fetch("/logout", { method: "DELETE" })
            .then(r => {
                console.log(r)
                if (r.ok) {
                    dispatch({ type: "logout", payload: {} })
                } else {
                    r.json().then(err => console.log(err))
                }
            })
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "login":
            return action.payload

        case "logout":
            return action.payload

        case "signup":
            return action.payload

        default:
            return state
    }
}

export default userReducer
export { fetchLogin, logoutUser, createSignUp, setUser }
