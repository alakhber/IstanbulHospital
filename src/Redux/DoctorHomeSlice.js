import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";


export const fetchDoctorsHomeSlice = createAsyncThunk('data/fecthDoctorsHomeSLice',
    async () => {
        const doctosHomeApi = "/api/home/doctors";
        const response = await Api.get(`${doctosHomeApi}`)
        return response.data.data
    })


const initialState = {
    fetchDoctorsHomeSlice: {}
}

const DoctorHomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
        getAllHomeDocSLice: (state, { payload }) => {
            state.data = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDoctorsHomeSlice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false
        })
    }
})

export const { getAllHomeDocSLice } = DoctorHomeSlice.actions;
export const getAllHomeSlice = (state) => state.fetchDoctorsHomeSlice;
export default DoctorHomeSlice.reducer


