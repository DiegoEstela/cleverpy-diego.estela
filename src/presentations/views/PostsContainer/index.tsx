import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IallPost, IModalContain } from "../../../app/global/interfaces";
import { deletePostById } from "../../../store/slices/post";
import { Container, Card, TitleBox} from "./index.style";
import { FaEdit, FaTrash } from "react-icons/fa";
import AnimatedButton from "../../components/AnimatedButton";
import ModalEditPost from "../../components/ModalEditPost/"


function PostContainer({ posts }: any): JSX.Element {
  const [modal, setModal] = useState<IModalContain >({open: false, post: null} )
  const dispatch = useDispatch();
  const HandleDelete = (id: number) => {
    dispatch(deletePostById(id));
  };

  console.log(modal)


  return (
    <Container>
      {posts.map((post: IallPost) => (
        <> 
        <Card key={post.id}>
          <div className="face front">
            <div className="number">
              <span>{post.id}</span>
            </div>
            <h1><TitleBox>TITLE:</TitleBox>{post.title.slice(0, 30)}</h1>
          </div>
          <div className="face back">
            <h1>{post.title}</h1>
            <p>{post.body.slice(0, 30)}...</p>
            <Link className="LinkBotton" to={`post/${post.id}`}>
              <AnimatedButton text={"Ver mas"} />
            </Link>
            <div className="boxIcon">
              <FaTrash className="icon" onClick={() => HandleDelete(post.id)} />
              <FaEdit className="icon" onClick={(e) => setModal({open: true, post})}/>
            </div>
          </div>
        </Card>
        </>
      ))}
      {modal.open ? (
       <ModalEditPost
       modal={modal}
       changeState={setModal}
       post={modal?.post}
       showHeader={true}
       />
      ) : ""}
    </Container>
  );
}

export default PostContainer;

