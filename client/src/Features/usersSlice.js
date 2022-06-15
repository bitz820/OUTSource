const initialState = {}


// Authorize User is still Logged In
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

// Sign Up for Account
const createSignUp = (user, navigate, toast) => {
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
                    r.json().then(user => {
                        toast.info(`Welcome to the OUTSource Family, ${user.first_name}`, {
                            theme: "colored",
                            icon: "❤️🧡💛🖤💚💙💜",
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        dispatch({ type: "signup", payload: user })
                        navigate("/")
                    })
                } else {
                    r.json().then(err => {
                        err.errors.map(e => {
                            toast.error(e, {
                                theme: "colored",
                                icon: "❤️🧡💛🖤💚💙💜",
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            })
                        })
                    })

                }
            })
    }
}

// Fetch User Information
const fetchLogin = (user, navigate, toast) => {
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
                    r.json().then(user => {
                        dispatch({ type: "login", payload: user })
                        toast.warn(`Welcome back ${user.first_name}, you were missed!`, {
                            theme: "colored",
                            icon: "❤️🧡💛🖤💚💙💜",
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        navigate("/")
                    })
                }
                else {
                    r.json().then(err => {
                        toast.error(err.error, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        navigate("/login")
                    })
                }
            })
    }
}

// Log User Out
const logoutUser = (toast) => {
    return function (dispatch) {
        fetch("/logout", { method: "DELETE" })
            .then(r => {
                console.log(r)
                if (r.ok) {
                    toast.warn("You have been logged out, come back soon!", {
                        icon: "👋🏽",
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    dispatch({ type: "logout", payload: {} })
                } else {
                    r.json().then(err => toast.error(err, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }))
                }
            })
    }
}

// Permanently Delete Account
const deleteAccount = (id, toast) => {
    return function (dispatch) {
        fetch(`/users/${id}`, { method: "DELETE" })
            .then(r => {
                console.log(r)
                if (r.ok) {
                    toast.info("Account deleted successfully, please come back any time", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    dispatch({ type: "delete", payload: {} })
                } else {
                    r.json().then(err => {
                        console.log(err)
                        toast.error(err, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })})
                }
            })
    }
}

// Update User Account Details 
const updateAccountDetails = (user, toast, navigate) => {
    return function (dispatch) {
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', "Accept": 'application/json' },
            body: JSON.stringify(user)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => {
                        toast.success(`${user.first_name}'s Account has successfully been updated!`)
                        dispatch({ type: "update", payload: user })
                        navigate("/profile")
                    })
                }
                else {
                    r.json().then(err => {
                        err.errors.map(e => toast.error(e))
                        navigate("/editProfile")
                    })
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

        case "delete":
            return action.payload

        case "update":
            return action.payload

        default:
            return state
    }
}

export default userReducer
export { fetchLogin, logoutUser, createSignUp, setUser, deleteAccount, updateAccountDetails }
