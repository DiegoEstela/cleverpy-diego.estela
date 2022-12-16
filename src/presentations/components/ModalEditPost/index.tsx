import { useState } from 'react';
import {Overlay,ModalContainer, ModalHeader, CloseBoton, Contain, ButtonModal} from './index.style'
import { IModalEditPost } from '../../../app/global/interfaces';
import {FaWindowClose} from "react-icons/fa";


const ModalEditPost = ({modal,changeState,post,showHeader}: IModalEditPost) => {
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    body: '',
    userId: 0,
  });

  const handleChangeFormData = (key: string, value: unknown) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
      {modal.open && (
        <Overlay >
          <ModalContainer >
            {showHeader && (
              <ModalHeader>
                <h3>{post?.title}</h3>
              </ModalHeader>
            )}
            <CloseBoton> 
            <FaWindowClose className='icon' onClick={() => changeState(false)}/>
            </CloseBoton>
            <Contain>
         <h1>Editar Titulo</h1>
         <input
            className='inputText'
            type='text'
            name='title'
            value={formData?.title ? formData?.title : modal?.post?.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeFormData(e.target.name, e.target.value)
            }/>
         <label>Editar Texto: </label>
         <textarea
            className='textArea'
            name='body'
            value={formData?.body ? formData?.body : modal?.post?.body}
            onChange={(e)=> handleChangeFormData(e.target.name, e.target.value)}
        />
         <ButtonModal onClick={() => changeState({...modal, open: false})}>Aceptar</ButtonModal>
       </Contain>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default ModalEditPost;

