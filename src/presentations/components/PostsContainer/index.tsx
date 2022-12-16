
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Card } from "./index.style";
import { IallPost } from "../../../app/global/interfaces";
import { deletePostById } from "../../../store/slices/post";


function PostContainer({ posts }: any): JSX.Element {

  const dispatch  = useDispatch()
  const HandleDelete = (id: number)=>{
    dispatch(deletePostById(id))
  }

  return (
    <Container>
      {posts.map((post: IallPost) => (
        <Card key={post.id}>
          <div className="face front">
            <h1>{post.title}</h1>
            <h2> {post.id} </h2>
          </div>
          <div className="face back">
            <h1>{post.title}</h1>
            <p>{post.body.slice(0, 30)}...</p>
            <Link className="AbautLink" to={`post/${post.id}`}>
              <span>Ver mas</span>
            </Link>
            <span onClick={()=> HandleDelete(post.id)}>Borrar</span>
          </div>
        </Card>
      ))}
    </Container>
  );
}

export default PostContainer;
