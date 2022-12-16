import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IallPost, IModalContain, PropTypesPost } from "../../../app/global/interfaces";
import { deletePostById } from "../../../store/slices/post";
import { Container, Card, TitleSpan, TitleContainer, TitleNoLogin} from "./index.style";
import { FaEdit, FaTrash } from "react-icons/fa";
import AnimatedButton from "../../components/AnimatedButton";
import ModalEditPost from "../../components/ModalEditPost/"



function PostContainer({ posts , currentUser } : PropTypesPost): JSX.Element {
  const [modal, setModal] = useState<IModalContain >({open: false, post: null} )
  const dispatch = useDispatch();
  const HandleDelete = (id: number) => {
    dispatch(deletePostById(id));
  };


  return (
    <Container> 
    {currentUser ?  <>
      {posts.map((post: IallPost) => (
        <> 
        <Card key={post.id}>
          <div className="face front">
            <div className="number">
              <span>{post.id}</span>
            </div>
            <TitleContainer> 
              <h1><TitleSpan>TITLE:</TitleSpan>{post.title.slice(0, 15)} </h1>
              <h2><TitleSpan>AUTOR:</TitleSpan>{post.userId} </h2>
            </TitleContainer>
            
          </div>
          <div className="face back">
            <h1>TITLE: {post.title}</h1>
            <p>{post.body.slice(0, 30)}...</p>
            <Link className="LinkBotton" to={`/post/${post.id}`}>
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
    </> : <TitleNoLogin> No se puede acceder a los post por favor logueate</TitleNoLogin>}
    </Container>
  );
}

export default PostContainer;

