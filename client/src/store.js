import {configureStore} from "@reduxjs/toolkit"

import clinicsReducer from "./clinicsSlice"

const store = configureStore({
    reducer: {
        clinics: clinicsReducer
    }
});

export default store