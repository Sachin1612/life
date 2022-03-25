import { createSlice } from "@reduxjs/toolkit";
import { posts } from "test/data";

const name = "post";
const postSlice = createSlice({
  name,
  initialState: {
    posts,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { addPost } = postSlice.actions;

export const selectPosts = (state) => state[name].posts;

export default { [name]: postSlice.reducer };
