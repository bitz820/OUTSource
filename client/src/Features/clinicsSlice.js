
const initialState = {
    clinics: []
}

const fetchClinics = () => {
    return function (dispatch) {
        fetch("/clinics")
            .then(r => r.json())
            .then(clinics => dispatch({ type: "fetchClinics", payload: clinics }))
    }
}

const clinicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetchClinics":
            return {
                ...state,
                clinics: action.payload
            }
        default:
            return state
    }
}

export default clinicsReducer
export { fetchClinics }
