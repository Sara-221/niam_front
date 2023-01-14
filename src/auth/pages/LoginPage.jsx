import { useState } from 'react'
import { useAuthStore } from '../hooks'
import './loginPage.css'

export const LoginPage = () => {

  // Importamos del store las funciones que nos harán falta para loguearnos
  const {startLogin, errorMsg} = useAuthStore()

  // Usamos el hook useState para actualizar los valores del formulario. Los incializamos como un objeto vacío.
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  // Manejar los cambios en campos de formulario
  const handleLoginInputChange=({target})=>{
    setLoginData({
      ...loginData,
      [target.name]:target.value
    })
  }

  // Inicializamos un array que acumulará los errores al rellenar el formulario
  const [errors, setErrors] = useState([])

  // Enviar datos del formulario
  const loginSubmit=(ev)=>{

    // Reseteamos los errores
    setErrors([])

    // evitar actualización de la página
    ev.preventDefault()
    
    // Validar los datos
    if(loginData.email.trim().length<=0 || loginData.password.trim().length<=0){
      setErrors(...errors, 'Has olvidado escribir tu e-mail o tu contraseña.')
    }else{
      // Enviar los datos haciendo uso del store
      startLogin(loginData)
    }

    // Limpiar el formulario cada vez que se envían los datos
    setLoginData({
      email: '',
      password: '',
    })
  }


  return (
    <>
    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center py-1 px-5 py-sm-5 colorFondo pagCompleta">
      {/* Ilustarción de la página de inicio de sesión */}
      <div className='loginBg'></div>
      {/* Formulario de inicio de sesión */}
      <div className='w-100 px-sm-5'>
        <form className='mt-sm-5 mx-sm-5' onSubmit={loginSubmit}>
          <label>Correo Electrónico</label>
          <div className='input-group'>
            <input 
              type="email"
              name='email'
              id='email'
              placeholder='Tu email'
              value={loginData.email}
              onChange={handleLoginInputChange}
              className='form-control mb-2'
              />
            <span className='input-group-text mb-2'>
              <i 
                className="fa-solid fa-at"
                id="inputGroupFileAddon04">
              </i>
            </span>
          </div>
          <label>Contraseña</label>
          <div className='input-group'>
            <input 
              type="password" 
              name="password"
              id="password"
              placeholder="Tu contraseña"
              value={loginData.password}
              onChange={handleLoginInputChange}
              className='form-control mb-3'
              />
            <span className='input-group-text mb-3'>
              <i 
                className="fa-solid fa-lock">
              </i>
            </span>
          </div>
          <div className='text-danger pb-2'>
            <small>{
              (errorMsg !== undefined) ? errorMsg : errors
              }</small>
          </div>
            <button
              type="submit"
              className="btn btn-dark form-control rounded-3 mb-1">
              Iniciar Sesión
            </button>
            <hr />
            {/* El botón de crear nuevo usuario está desactivado hasta finalizar la posibilidad de añadir nuevos usuarios (futuro trabajo) */}
            <button
              type="submit"
              className="btn btn-outline-dark form-control rounded-3"
              disabled>
                Crear cuenta nueva
            </button>
        </form>
      </div>
    </div>
    
    </>
  )
}
