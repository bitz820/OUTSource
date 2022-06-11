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

const addFavoriteClinic = (favoriteInstance) => {
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
                            dispatch({ type: "addFavorite", payload: fav });
                        })
                } else {
                    r.json().then(err => console.log(err))
                }
            })
    }
}

export const deleteFavorite = (id) => {
    console.log(id)
    return function (dispatch) {
        fetch(`/favorites/${id}`, { method: "DELETE" })
            .then(r => {
                // console.log(r)
                if (r.ok) {
                    dispatch({ type: "removeClinic", payload: id })
                } else {
                    r.json().then(err => console.log(err))
                }
            })
    }
}

const favoritesReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "getSavedClinics":
            console.log(action.payload)
            return action.payload

        case "addFavorite":
            console.log(state, action.payload)
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