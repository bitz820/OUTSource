import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchClinics = createAsyncThunk("clinics/fetchClinics", () => {
    return fetch("/clinics")
            .then(r => r.json())
            .then(data => data)
    });

const clinicsSlice = createSlice({
    name: "clinics",
    initialState: {
        entities: [],
        status: "idle"
    },
    reducers: {
        // WRITE CRUD HERE -- IF NEEDED
    },
    extraReducers: {
        [fetchClinics.pending](state){
            state.status = "loading";
        },
        [fetchClinics.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle"
        }
    }
})


export default clinicsSlice.reducer