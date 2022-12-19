import {useEffect, useContext} from 'react'
import  firebase  from "@firebase/auth-types";
import { useDispatch, useSelector} from 'react-redux'
import { AuthContext } from '../../../app/global/authContext/AuthContext'
import { getAllPost } from '../../../api/services/getAllPost'
import { IallPost } from '../../../app/global/interfaces'
import { RootState } from "../../../store/index"
import PostContainer from '../PostsContainer/index'
import { Container } from './index.style'

function ListAllPost() : JSX.Element{
  const {list : Allposts} : {list : IallPost[]} = useSelector((state: RootState) => state.postsSlice)
  const dispatch : Function = useDispatch()
  const currentUser : firebase.User | null = useContext(AuthContext);
 
  useEffect(()=>{
    dispatch(getAllPost)
  },[dispatch])

  return (
    <Container> 
      <PostContainer posts={Allposts} currentUser={currentUser}/>
    </Container>
  )
}

export default ListAllPost