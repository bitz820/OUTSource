import { combineReducers } from "redux";
import clinicsReducer from "./Features/clinicsSlice"
import userReducer from "./Features/usersSlice"
import favoritesReducer from "./Features/favoritesSlice";

const rootReducer = combineReducers({
    clinics: clinicsReducer,
    user: userReducer,
    favorites: favoritesReducer
})

export default rootReducer