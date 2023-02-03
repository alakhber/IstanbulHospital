import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from '../Api/Api';

export const fetchDoctors = createAsyncThunk('data/fetchDoctors',
    async () => {
        const doctors = '/api/doctor/doctors'
        const response = await Api.get(`${doctors}`)
        return response.data.data

    })

export const fetchdoctorDetail = createAsyncThunk('data/fetchdoctorDetail/',
    async (id) => {
        const doctorDetails = '/api/doctor/detail'
        const response = await Api.get(`${doctorDetails}/${id}`)
        return response.data.data
    })
export const fetchReservation = createAsyncThunk('data/fetchReservation/',
    async () => {
        const doctorReservation = '/api/reservation/doctors'
        const response = await Api.get(`${doctorReservation}`)
        return response.data.data

    })


const initialState = {
    data: {},
    fetchdoctorDetail: {},
    fetchReservation: {},
}


const doctorsSlice = createSlice({
    name: "data",
    initialState,
    reducers: {

        addDoctors: (state, { payload }) => {
            state.data = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDoctors.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            // console.log("Pending")
        });
        builder.addCase(fetchDoctors.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = true;
        });
        builder.addCase(fetchDoctors.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching todos data";
            console.log("Rejected")
        });
        builder.addCase(fetchdoctorDetail.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchReservation.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });


    },

});
export const { addDoctors } = doctorsSlice.actions;
export const getAllDoctors = (state) => state.data;
export const getAllDoctorId = (state) => state.data.fetchdoctorDetail;
export default doctorsSlice.reducer;