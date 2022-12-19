import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IallPost, IInitialState } from "../../../app/global/interfaces";

const initialState: IInitialState = {
  list: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsList: (state, action: PayloadAction<Array<IallPost>>) => {
      state.list = action.payload;
    },
    deletePostById: (state, action: PayloadAction<number>) => {
      const foundPost = state.list.find((post) => post.id === action.payload);
      if (foundPost) {
        state.list.splice(state.list.indexOf(foundPost), 1);
      }
    },
    editPost: (state, action: PayloadAction<IallPost>) => {
      const { id, userId, title, body } = action.payload;
      const foundPost = state.list.find((post) => post.id === id);
      if (foundPost) {
        foundPost.id = id;
        foundPost.userId = userId;
        foundPost.title = title;
        foundPost.body = body;
      }
    },
  },
});

export const { setPostsList, deletePostById, editPost } = postsSlice.actions;

export default postsSlice.reducer;
