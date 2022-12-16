import { useParams, Link } from "react-router-dom";
import { RootState } from "../../../store";
import { IallPost } from "../../../app/global/interfaces";
import { useSelector } from "react-redux";
import { Container, DivPost, Title, Paragraph } from "./index.style";
import AnimatedButton from "../../components/AnimatedButton";

function PostDetail(): JSX.Element {
  const { id } = useParams();
  const { list }: { list: IallPost[] } = useSelector(
    (state: RootState) => state.postsSlice
  );

  let postForId = list.find((o) => o.id === Number(id));
  return (
    <Container>
      <DivPost>
        <Title>
          {" "}
          Post Number {postForId?.id} : {postForId?.title}{" "}
        </Title>
        <Paragraph> {postForId?.body}</Paragraph>
        <Link className="AbautLink" to={`/post`}>
          <AnimatedButton text={"VOLVER"} />
        </Link>
      </DivPost>
    </Container>
  );
}

export default PostDetail;
