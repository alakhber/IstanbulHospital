import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fetchBlogsHomeSlice = createAsyncThunk('blogsSlice/fetchBlogsHomeSlice',
    async () => {
        const BlogApi = "/api/blog/blogs";
        const response = await Api.get(`${BlogApi}`)
        return response.data.data
    })

export const fetchBlogSlice = createAsyncThunk('blogsSlice/fetchblogSlice',
    async (id) => {
        const bloqAPI = "/api/blog/detail";
        const response = await Api.get(`${bloqAPI}/${id}`)
        return response.data.data;
    })

const initialState = {
    fetchBlogsHomeSlice: {},
    fetchBlogSlice: {},
}

const blogsHomeSlice = createSlice({
    name: "blogsSlice",
    initialState,
    reducers: {
        addBlogsHome: (state, { payload }) => {
            state.data = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlogsHomeSlice.pending, (state, actions) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchBlogsHomeSlice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = "true blogs";
        });
        builder.addCase(fetchBlogsHomeSlice.rejected, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchBlogSlice.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export const { addBlogsHome } = blogsHomeSlice.actions
export const getAllBlogs = (state) => state.fetchBlogsHomeSlice;
export const getAllBlogInfo = (state) => state.fetchBlogSlice;
export default blogsHomeSlice.reducer;