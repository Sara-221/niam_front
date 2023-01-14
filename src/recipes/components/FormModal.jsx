import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { validateForm } from '../helpers/validateForm';
import { useRecipesStore } from '../hooks/useRecipesStore';
import { useUiStore } from '../hooks/useUiStore';

// Estilos de la modal, como descritos en la documentación de react-modal
const customStyles = {
    content: {
      top: '0%',
      left: '0%',
      right: 'auto',
      bottom: 'auto',
      marginLeft: '0%',
      transform: 'translate(8%, 8%)',
    },
  };

  // La ventana modal envuelve toda la aplicación
  Modal.setAppElement('#root');

export const FormModal = () => {
    
    // Desestructuramos del store los estados y acciones que necesitamos utilizar en este componente:
    const {formModalIsOpen, closeFormModal} = useUiStore()
    const {activeRecipe, startSavingRecipe} = useRecipesStore()

    // Declaración temporal de los valores introducidos en formulario de receta:
    const [formValues, setFormValues] = useState({
        name: '',
        category: '',
        url: '',
        time: '',
        ingredients:'',
        method: '',
        notes: ''
    })

    // En caso de que se haya seleccionado una receta, rellenamos el formulario con los datos que le correspondan.
    useEffect(()=>{
        if(activeRecipe!==null){
            setFormValues({
                ...activeRecipe
            })
        }
    },[activeRecipe])

    // Declaramos un array, inicialmente vacío, que acumulará y mostrará los errores resultantes de la validación
    const [errors, setErrors] = useState([])

    // Función que maneja los cambios en los campos de formulario
    const handleInputChange=({target})=>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
    }

    // Función que maneja el formulario:
    const handleSubmit=(ev)=>{
        // Impedir que se recargue la página al enviar el formulario
        ev.preventDefault()

        // Validación del formulario
        setErrors([validateForm(formValues)[0]])

        // Guardar los valores introducidos por el usuario
        if(validateForm(formValues).length===0){
            // Reseteamos los errores
            setErrors([])
            startSavingRecipe(formValues)
            // Cerrar la ventana modal
            closeFormModal()
        }

    }

  return (
    <>
        <Modal
            isOpen={formModalIsOpen}
            onRequestClose={closeFormModal}
            style={customStyles}
            className="modalForm"
        >

        {/* Cerrar modal */}
        <button
            className='btn-close btnCerrar'
            type='button'
            onClick= {closeFormModal}>    
        </button>
        
        <h2 className='px-2'>Añadir o Editar receta</h2>
        <form 
            onSubmit={handleSubmit}
            className='form-group px-2'
            autoComplete='off'>
            <label>Nombre de la receta</label>
            <input 
                type="text" 
                name='name'
                value={formValues.name}
                onChange={handleInputChange}
                className='form-control my-1' />
            <div className='row d-flex align-items-center justify-content-start my-3'>
                <div className='col-sm-3'>
                    <label>Categoría</label>
                    <select 
                        name='category'
                        value={formValues.category}
                        onChange={handleInputChange}
                        className='form-select'>
                        <option value=""></option>
                        <option value="aperitivo">Aperitivo</option>
                        <option value="desayuno">Desayuno</option>
                        <option value="ensalada">Ensalada</option>
                        <option value="principal">Plato Principal</option>
                        <option value="sopa">Sopas y Cremas</option>
                        <option value="postre">Postre</option>
                    </select>
                </div>
                <div className='col-sm-5'>
                    <label>Enlace a la receta</label>
                    <input 
                        type="text"
                        name='url' 
                        value={formValues.url}
                        onChange={handleInputChange}
                        className='form-control'/>
                </div>
                <div className='col-sm-4'>
                    <label>Tiempo de preparación</label>
                    <input 
                        type="text"
                        name='time'
                        value={formValues.time}
                        onChange={handleInputChange}
                        className='form-control' />
                </div>
            </div>
            <label>Ingredientes</label>
            <textarea
                name='ingredients'
                value={formValues.ingredients}
                onChange={handleInputChange}
                className='form-control my-1'
                rows='2'>
            </textarea>
            <label>Elaboración</label>
            <textarea
                name='method'
                value={formValues.method}
                onChange={handleInputChange}
                rows='4'
                className='form-control my-1'>
            </textarea>
            <label>Notas</label>
            <textarea
                name='notes'
                value={formValues.notes}
                onChange={handleInputChange}
                rows='1'
                className='form-control'>
            </textarea>
            {/* Aquí se mostrarán los errores al rellenar el formulario */}
            <div
                className='text-danger'>
                    {/* Nota: asignamos como key un valor aleatorio a cada uno de los items, para que no nos aparezca el warning al repetirse el error */}
                <ul
                    className='list-group'>
                    {
                        errors.map(err=>(<li key={Math.floor(Math.random()*10)}> <i className="fa-solid fa-xmark"></i> {err}</li>))
                    }
                </ul>
            </div>
            <button
                type="submit"
                className='btn btn-dark form-control sm mt-3'>
                Guardar receta
            </button>
        </form>
        
      </Modal>
    
    
    </>
  )
}
