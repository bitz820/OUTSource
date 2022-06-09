import { combineReducers } from "redux";
import clinicsReducer from "./Features/clinicsSlice"
import userReducer from "./Features/usersSlice"

const rootReducer = combineReducers({
    clinics: clinicsReducer,
    user: userReducer,
})

export default rootReducer