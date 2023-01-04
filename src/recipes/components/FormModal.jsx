import { useState } from 'react';
import Modal from 'react-modal';

// Estilos de la modal, como descritos en la documentación de react-modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const FormModal = () => {
    
    const [modalIsOpen, setIsOpen] = useState(true)

    const openModal=()=>{
        setIsOpen(true)
    }

    const closeModal=()=>{
        setIsOpen(false)
    }

  return (
    <>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
        
        <h2 className='px-2'>Añadir receta</h2>
        <form className='form-group px-2'>
            <label>Nombre de la receta</label>
            <input 
                type="text" 
                id='name'
                className='form-control my-1' />
            <div className='row d-flex align-items-center justify-content-start my-3'>
                <div className='col-3'>
                    <label>Categoría</label>
                    <select 
                        id='category'
                        className='form-control'>
                        <option value="aperitivo">Aperitivo</option>
                        <option value="desayuno">Desayuno</option>
                        <option value="ensalada">Ensalada</option>
                        <option value="principal">Plato Principal</option>
                        <option value="sopa">Sopas y Cremas</option>
                        <option value="postre">Postre</option>
                    </select>
                </div>
                <div className='col-4'>
                    <label>Enlace a la receta</label>
                    <input 
                        type="text"
                        id='link' />
                </div>
                <div className='col-3'>
                    <label>Tiempo de preparación</label>
                    <input 
                        type="text"
                        id='time' />
                </div>
            </div>
            <label>Ingredientes</label>
            <textarea
                id='ingredients'
                className='form-control my-1'
                rows='2'>
            </textarea>
            <label>Elaboración</label>
            <textarea
                id='method'
                rows='4'
                className='form-control my-1'>
            </textarea>
            <label>Notas</label>
            <textarea
                id='notes'
                rows='1'
                className='form-control'>
            </textarea>


        </form>
        
      </Modal>
    
    
    </>
  )
}
