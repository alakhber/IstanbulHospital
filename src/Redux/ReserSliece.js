import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fetchReserDoctors = createAsyncThunk('reservation/fetchReservations',
    async () => {
        const reserAPI = "/api/reservation/doctors";
        const response = await Api.get(`${reserAPI}`)
        // console.log("resDocAPI", response.data)
        return response.data.data
    })

const initialState = {
    fetchReserDoctors: {}
}

const reserSliece = createSlice({
    name: "reservation",
    initialState,
    reducer: {
        addReserDoctorAPi: (state, { payload }) => {
            state.data = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReserDoctors.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchReserDoctors.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = true;
        });
        builder.addCase(fetchReserDoctors.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching reserData data";
            console.log("Rejected")
        })
    }
})
export const { addReserDoctorAPi } = reserSliece.actions;
export const getAllReserAPI = (state) => state.fetchReserDoctors;
export default reserSliece.reducer;