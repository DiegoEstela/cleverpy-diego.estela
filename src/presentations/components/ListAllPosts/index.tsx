import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllPost } from '../../../api/services/getAllPost'
import { IallPost, Istate } from '../../../app/global/interfaces'
function ListAllPost() {
  const {list} : {list : IallPost[]} = useSelector((state : Istate) => state.postsSlice)
  const dispatch : Function = useDispatch()

  useEffect(()=>{
    dispatch(getAllPost)
  },[dispatch])

  console.log(list)

  return (
    <>
    {
    list?.map((post : IallPost)=>(
      <span key={post.id} >{post.title} </span>
    ))
}
    </>
  )
}

export default ListAllPost