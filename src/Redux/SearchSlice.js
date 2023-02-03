import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fetchSearchSlice = createAsyncThunk('searchSLice',
    async (search) => {
        const searchApi = "/api/search";
        const response = await Api.get(`${searchApi}/${search}`)
        console.log("searchfetch", response)
        return response.data.data
    })
const initialState = {
    fetchSearchSlice,
    bSearch: '',
}
const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        addSearch: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchSlice.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchSearchSlice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = true;
        });
        builder.addCase(fetchSearchSlice, (state, action) => {
            state.loading = true;
            state.error = '';
            console.log("search Slice")
        })
    }
})

export const { addSearch } = searchSlice.actions;
export const getALLSearch = (state) => state.fetchSearchSlice;
export default searchSlice.reducer 