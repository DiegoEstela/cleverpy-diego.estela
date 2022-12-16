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
            action.payload.forEach((post : IallPost)=>{
                state.list.push(post);
            })
        },
        deletePostById: (state , action : PayloadAction<number>) =>{
            const postFound = state.list.find(post => post.id === action.payload)
            if(postFound){
                state.list.splice(state.list.indexOf(postFound), 1)
            }
        }
       
    }
})

export const {setPostsList, deletePostById} = postsSlice.actions

export default  postsSlice.reducer

