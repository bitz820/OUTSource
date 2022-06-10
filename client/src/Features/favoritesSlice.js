const initialState = []

const fetchFavorites = () => {
    return function (dispatch) {
        fetch("/favorites")
        .then(r => r.json())
        .then(favorites => dispatch({
            type: "getSavedClinics", payload: favorites
        }))
    }
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getSavedClinics":
            return {
                ...state,
                favorites: action.payload
            }
            default:
                return state
    }
}

export default favoritesReducer
export { fetchFavorites}