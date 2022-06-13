const initialState = []


const fetchFavorites = () => {
    return function (dispatch) {
        fetch("/favorites")
            .then(r => r.json())
            .then(favorites => {
                // console.log(favorites)
                dispatch({ type: "getSavedClinics", payload: favorites })
            })
    }
}

const addFavoriteClinic = (favoriteInstance, toast, navigate) => {
    return function (dispatch) {
        fetch("/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(favoriteInstance)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(
                        fav => {
                            toast.success("Favorite has been added!", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            })
                            dispatch({ type: "addFavorite", payload: fav });
                        })
                } else {
                    r.json().then(err => {
                        (err.errors.map(e => {
                            if (e === "User must exist") {
                                toast.error(e, {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                })
                                toast.info("Redirecting to Login Page...")
                                navigate("/login")
                            } else {
                                toast.error(e, {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                })
                            }
                        })

                        )
                    })
                }
            })
    }
}

export const deleteFavorite = (id, toast) => {
    // console.log(id)
    return function (dispatch) {
        fetch(`/favorites/${id}`, { method: "DELETE" })
            .then(r => {
                // console.log(r)
                if (r.ok) {
                    toast.success("This clinic has been removed from your Saved Clinics!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    dispatch({ type: "removeClinic", payload: id })
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

const favoritesReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "getSavedClinics":
            // console.log(action.payload)
            return action.payload

        case "addFavorite":
            // console.log(state, action.payload)
            return [...state,
            action.payload]

        case "removeClinic":
            return state.filter(fav => fav.id !== action.payload)

        default:
            return state
    }
}

export default favoritesReducer
export { fetchFavorites, addFavoriteClinic }