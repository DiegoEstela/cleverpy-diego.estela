import { useParams, Link } from "react-router-dom";
import { IallPost, Istate } from "../../../app/global/interfaces";
import { useSelector } from "react-redux";
import { Container, DivPost, Title } from "./index.style";

function PostDetail(): JSX.Element {
  const { id } = useParams();
  const { list }: { list: IallPost[] } = useSelector(
    (state: Istate) => state.postsSlice
  );

  let postForId = list.find((o) => o.id === Number(id));
  return (
    <Container>
      <DivPost>
        <Title> {postForId?.title} </Title>
        <h2>{postForId?.id}</h2>
        <p> {postForId?.body}</p>
        <Link className="AbautLink" to={`/`}>
          <span>Volver</span>
        </Link>
      </DivPost>
    </Container>
  );
}

export default PostDetail;
