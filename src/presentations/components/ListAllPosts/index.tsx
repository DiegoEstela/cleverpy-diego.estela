import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllPost } from '../../../api/services/getAllPost'
import { IallPost, Istate } from '../../../app/global/interfaces'
import PostContainer from '../PostsContainer/index'
function ListAllPost() {
  const {list} : {list : IallPost[]} = useSelector((state : Istate) => state.postsSlice)
  const dispatch : Function = useDispatch()
  
  useEffect(()=>{
    dispatch(getAllPost)
  },[dispatch])

  return (
    <PostContainer Posts={list}/>
  )
}

export default ListAllPost