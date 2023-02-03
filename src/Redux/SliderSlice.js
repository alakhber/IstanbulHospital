import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";


export const fetchSlider = createAsyncThunk('sliderSlice/fetchSlider', async () => {
    const sliderApi = "/api/home/slider";
    const response = await Api.get(`${sliderApi}`)
    // console.log("Sliderss", response)
    return response.data.data
})

const initialState = {
    fetchSlider: {},
}

const sliderSlice = createSlice({
    name: "sliderSlice",
    initialState,
    reducers: {
        addSliders: (state, { payload }) => {
            state.data = payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSlider.pending, (state, actions) => {
            state.loading = true;
            state.error = "";
            // console.log("pending slider")
        })
        builder.addCase(fetchSlider.fulfilled, (state, action) => {
            state.data = action.payload;
            state.error = "";
            // console.log("silder fulfilled")
        })
        builder.addCase(fetchSlider.rejected, (state, action) => {
            state.loading = true;
            state.error = "";
            console.log(" slicer silece rejected")
        })
    }
})

export const { addSliders } = sliderSlice.actions;
// export const getAllSliderSlice = (state) => state.data;
export const GetAllSliders = (state) => state.data.fetchSlider;
export default sliderSlice.reducer;