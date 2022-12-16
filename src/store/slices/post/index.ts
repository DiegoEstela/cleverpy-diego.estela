import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IallPost, IInitialState } from "../../../app/global/interfaces";

const initialState: IInitialState= {
    list: [],
  };


export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setPostsList: (state , action : PayloadAction<Array<IallPost>>) =>{
            state.list = action.payload
        }
    }
})

export const {setPostsList} = postsSlice.actions

export default  postsSlice.reducer

