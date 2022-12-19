import { configureStore } from "@reduxjs/toolkit";
// reducers
import postsSlice from "./slices/post";

export const store = configureStore({
  reducer: {
    postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
