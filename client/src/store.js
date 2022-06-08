import {configureStore} from "@reduxjs/toolkit"

import clinicsReducer from "./Features/clinicsSlice"

const store = configureStore({
    reducer: {
        clinics: clinicsReducer
    }
});

export default store