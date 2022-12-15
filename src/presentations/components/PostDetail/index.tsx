import { useParams } from "react-router-dom"
import { IallPost, Istate } from '../../../app/global/interfaces'
import { useSelector} from 'react-redux'


function PostDetail() {
    const {id}= useParams()
    const {list} : {list : IallPost[]} = useSelector((state : Istate) => state.postsSlice)
    console.log(list.find(o => o.id === Number(id)))
    
  return (
     <>
     <h1>prueba</h1>
     </>
  )
}

export default PostDetail