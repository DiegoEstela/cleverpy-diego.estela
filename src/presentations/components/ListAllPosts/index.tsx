import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllPost } from '../../../api/services/getAllPost'
import { IallPost } from '../../../app/global/interfaces'
import { RootState } from "../../../store/index"
import PostContainer from '../PostsContainer/index'

function ListAllPost() : JSX.Element{
  const {list} : {list : IallPost[]} = useSelector((state: RootState) => state.postsSlice)
  const dispatch : Function = useDispatch()
  
  useEffect(()=>{
    dispatch(getAllPost)
  },[dispatch])

  return (
    <PostContainer posts={list}/>
  )
}

export default ListAllPost