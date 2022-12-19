import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../store/slices/post";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CloseBoton,
  Contain,
  ButtonModal,
} from "./index.style";
import { IallPost, IModalEditPost } from "../../../app/global/interfaces";
import { FaWindowClose } from "react-icons/fa";

const ModalEditPost = ({
  modal,
  changeState,
  post,
  showHeader,
}: IModalEditPost) => {
  const [formData, setFormData] = useState({
    id: modal?.post?.id,
    title: modal?.post?.title,
    body: modal?.post?.body,
    userId: modal?.post?.userId,
  });

  const dispatch = useDispatch();

  const handleChangeFormData = (key: string, value: unknown) => {
    setFormData({ ...formData, [key]: value });
  };

  const handlePreSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await dispatch(editPost(formData as IallPost));
    changeState(false);
  };

  return (
    <>
      {modal.open && (
        <Overlay>
          <ModalContainer>
            {showHeader && (
              <ModalHeader>
                <h3>{post?.title}</h3>
              </ModalHeader>
            )}
            <CloseBoton>
              <FaWindowClose
                className="icon"
                onClick={() => changeState(false)}
              />
            </CloseBoton>
            <Contain>
              <h1>Editar Titulo</h1>
              <input
                className="inputText"
                type="text"
                name="title"
                value={formData?.title ? formData?.title : modal?.post?.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeFormData(e.target.name, e.target.value)
                }
              />
              <label>Editar Texto: </label>
              <textarea
                className="textArea"
                name="body"
                value={formData?.body ? formData?.body : modal?.post?.body}
                onChange={(e) =>
                  handleChangeFormData(e.target.name, e.target.value)
                }
              />
              <ButtonModal onClick={(e) => handlePreSubmit(e)}>
                Aceptar
              </ButtonModal>
            </Contain>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default ModalEditPost;
