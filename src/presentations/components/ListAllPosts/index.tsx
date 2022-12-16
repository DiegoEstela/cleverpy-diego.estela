import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllPost } from '../../../api/services/getAllPost'
import { IallPost } from '../../../app/global/interfaces'
import { RootState } from "../../../store/index"
import PostContainer from '../PostsContainer/index'
import { Container } from './index.style'

function ListAllPost() : JSX.Element{
  const {list} : {list : IallPost[]} = useSelector((state: RootState) => state.postsSlice)
  const dispatch : Function = useDispatch()
  
  useEffect(()=>{
    dispatch(getAllPost)
  },[dispatch])

  return (
    <Container> 
      <PostContainer posts={list}/>
    </Container>
  )
}

export default ListAllPost