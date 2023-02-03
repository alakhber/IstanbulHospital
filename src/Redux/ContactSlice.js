import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fecthContactSlice = createAsyncThunk('contactSlice/fecthContactSlice',
    async () => {
        const contactApi = "/api/main/contact";
        const response = await Api.get(`${contactApi}`)
        console.log('ConAPI', response.data)
        return response.data


    })
const initialState = {
    fecthContactSlice: {},
}
const contactSlice = createSlice({
    name: "contactSlice",
    initialState,
    reducers: {
        AllContactSlice: ((state, { payload }) => {
            state.data = payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(fecthContactSlice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = true;
        })
    }
})

export const { AllContactSlice } = contactSlice.actions;
export const getAllContactSlice = (state) => state.fecthContactSlice;
export default contactSlice.reducer;