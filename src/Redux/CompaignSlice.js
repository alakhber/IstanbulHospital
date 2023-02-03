import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";


export const fetchCompaignSlice = createAsyncThunk('compaignSlice/fetchCompaignSlice',
    async () => {
        const compaignAPI = "/api/company/companies";
        const response = await Api.get(`${compaignAPI}`)
        console.log("CompaignAPI", response.data)
        return response.data

    })
export const fetchCompaignInfoSLice = createAsyncThunk('compaignSlice/fetchCompaignInfoSlice',
    async (id) => {
        const CompaignInfo = "/api/company/detail";
        const response = await Api.get(`${CompaignInfo}/${id}`);
        console.log("comaing ---api: ", response.data)
        return response.data.data
    })
const initialState = {
    fetchCompaignSlice: {},
    fetchCompaignInfoSLice: {},

}

const compaignSLice = createSlice({
    name: "compaignSlice",
    initialState,
    reducers: {
        addCompaign: (state, { payload }) => {
            state.data = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompaignSlice.pending, (state) => {
            state.data = true
        });
        builder.addCase(fetchCompaignSlice.fulfilled, (state, action) => {
            state.data = action.payload
        });
        builder.addCase(fetchCompaignInfoSLice.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const { addCompaign } = compaignSLice.actions;
export const getAllCompaignSLice = (state) => state.fetchCompaignSlice;
export const getAllCompaignInfoSLice = (state) => state.fetchCompaignInfoSLice;
export default compaignSLice.reducer;