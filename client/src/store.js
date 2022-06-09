import {configureStore} from "@reduxjs/toolkit"

import clinicsReducer from "./Features/clinicsSlice"
import userReducer from "./Features/usersSlice"

const store = configureStore({
    reducer: {
        clinics: clinicsReducer,
        user: userReducer
    }
});

export default store