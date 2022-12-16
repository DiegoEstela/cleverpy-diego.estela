import { useState } from 'react';



const ModalEditPost = ({setOpenModal} : any): JSX.Element =>{
  const [formData, setFormData] = useState({
    userId: '',
    title: '',
    body: '',
    id: '',
  });

 

  const handlePreSubmit =  () => {
    setOpenModal(false)
    
  };

  const handleChangeFormData = (key: string, value: unknown) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
     
      <h1> Editar Post</h1>

          <input
            type='text'
            name='fullName'
            value='Nombre y Apellido'
            onChange={(e) =>
              handleChangeFormData(e.target.name, e.target.value)
            }
          />
          <input
          type='text'
          name='fullName'
          value='Nombre y Apellido'
          onChange={(e) =>
            handleChangeFormData(e.target.name, e.target.value)
          }
        />
            <button  onClick={handlePreSubmit}>Cerrar </button>
       
      
       
    </>
  );
}

export default ModalEditPost;