const initialState = []

const fetchFavorites = () => {
    return function (dispatch) {
        fetch("/favorites")
            .then(r => r.json())
            .then(favorites => {
                // console.log(favorites)
                dispatch({type: "getSavedClinics", payload: favorites})
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
                    dispatch({ type: "addFavorite", payload: favoriteInstance });
                }else {
                    r.json().then(err => console.log(err))
                }
            })
    }
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getSavedClinics":
            console.log(action.payload)
            return action.payload

        case "addFavorite":
            // console.log(state, action.payload)
            return [...state,
            action.payload]

        default:
            return state
    }
}

export default favoritesReducer
export { fetchFavorites, addFavoriteClinic }