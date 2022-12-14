import { configureStore } from "@reduxjs/toolkit"; 
// reducers
import postsSlice from './slices/post'

export default configureStore({
    reducer:{
        postsSlice
    }
})