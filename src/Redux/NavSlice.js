import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fetchNavDepartamentsSlice = createAsyncThunk('navSLice/fetchHomeDepartamentSlice', async () => {
    const homeDepApi = "/api/main/navDepartaments";
    const response = await Api.get(`${homeDepApi}`)
    return response.data.data
})

const initialState = {

    fetchNavDepartamentsSlice: {},
}

const NavDepartSlice = createSlice({
    name: "navSlice",
    initialState,
    reducers: {
        addNavDepartament: (state, { payload }) => {
            state.data = payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchNavDepartamentsSlice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = true;
        })
    }
})

export const { addNavDepartament } = NavDepartSlice.actions;
export const getAllNavDepartament = (state) => state.fetchNavDepartamentsSlice;
export default NavDepartSlice.reducer;