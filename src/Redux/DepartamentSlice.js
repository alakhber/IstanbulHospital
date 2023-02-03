import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fetchDeparSlice = createAsyncThunk('depSlice/fetchDeparSlice',
    async () => {
        const deparApi = "/api/department/departments";
        const response = await Api.get(`${deparApi}`)
        return response.data
    })
export const fetchthreeDeparSlice = createAsyncThunk('depSlice/fetchDeparSlice',
    async () => {
        const deparApi = "/api/home/departments";
        const response = await Api.get(`${deparApi}`)
        return response.data
    })
export const fetchDeparInfoSlice = createAsyncThunk('depSLice/fetchDeparSlice/', async (id) => {
    const deparInfoAPI = '/api/department/detail';
    const response = await Api.get(`${deparInfoAPI}/${id}`);
    return response.data.data
})

const initialState = {
    fetchDeparSlice: {},
    fetchthreeDeparSlice: {},
    fetchDeparInfoSlice: {},
}
const departamentSlice = createSlice({
    name: "depSlice",
    initialState,
    reducers: {
        addDepartament: (state, { payload }) => {
            state.data = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDeparSlice.pending, (state, acton) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchDeparSlice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = true;
        });
        builder.addCase(fetchDeparSlice.rejected, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchDeparInfoSlice.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = true;
        })

    }
})

export const { addDepartament } = departamentSlice.actions;
export const getAllDepartamnet = (state) => state.fetchDeparSlice;
export const getAlletchthreeDeparSlice = (state) => state.fetchthreeDeparSlice;
export const getAllDeparInfo = (state) => state.fetchDeparInfoSlice;
export default departamentSlice.reducer;
