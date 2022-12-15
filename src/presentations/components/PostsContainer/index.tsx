import { Link } from "react-router-dom";
import { Container, Card} from "./index.style";
import { IallPost } from "../../../app/global/interfaces";

function PostContainer({ Posts }: any) {
  return (
    <Container>
      {Posts.map((post: IallPost) => (
        <Card key={post.id}>
          <div className="face front">
            <h1>{post.title}</h1>
          </div>
          <div className="face back">
            <h1>{post.title}</h1>
            <p>{post.body.slice(0,30)}...</p>
            <Link className="AbautLink" to={`post/${post.id}`}>
            <span>Ver mas</span>
          </Link>
          </div>
          
        </Card>
      ))}
    </Container>
  );
}

export default PostContainer;
