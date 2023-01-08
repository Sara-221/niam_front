import './loginPage.css'

export const LoginPage = () => {
  return (
    <>
    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center py-1 px-5 py-sm-5 colorFondo pagCompleta">
      {/* Ilustarción de la página de inicio de sesión */}
      <div className='loginBg'></div>
      {/* Formulario de inicio de sesión */}
      <div className='w-100 px-sm-5'>
        <form className='mt-sm-5 mx-sm-5' autoComplete='off'>
          <label>Correo Electrónico</label>
          <div className='input-group'>
            <input 
              type="email"
              name='email'
              id='email'
              placeholder='Tu email'
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
              className='form-control mb-3'
              aria-describedby="inputGroupFileAddon04"
              />
            <span className='input-group-text mb-3'>
              <i 
                className="fa-solid fa-lock"
                id="inputGroupFileAddon04">
              </i>
            </span>
          </div>
            <button
              type="submit"
              className="btn btn-dark form-control rounded-3 mb-1">
              Iniciar Sesión
            </button>
            <hr />
            <button
              type="submit"
              className="btn btn-outline-dark form-control rounded-3">
                Crear cuenta nueva
            </button>
        </form>
      </div>
    </div>
    
    </>
  )
}
