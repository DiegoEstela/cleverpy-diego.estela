import { createSlice } from "@reduxjs/toolkit";


export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        list:[]
    },
    reducers:{
        setPostsList: (state , action) =>{
            state.list = action.payload
        }
    }
})

export const {setPostsList} = postsSlice.actions

export default  postsSlice.reducer

