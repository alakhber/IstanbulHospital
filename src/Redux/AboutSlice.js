import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fetchAboutSlice = createAsyncThunk('aboutSlice/fetchAboutSlice',
    async () => {
        const aboutApi = "/api/about";
        const response = await Api.get(`${aboutApi}`)
        return response.data
    })

const initialState = {
    fetchAboutSlice,
}
const aboutSlice = createSlice({
    name: "aboutSlice",
    initialState,
    redusers: {
        allAboutSlice: (state, { payload }) => {
            state.data = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAboutSlice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = true;
        })
    }
})

export const { allAboutSlice } = aboutSlice.actions;
export const getAllAboutSlice = (state) => state.fetchAboutSlice;
export default aboutSlice.reducer;

