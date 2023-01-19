import { NavLink} from 'react-router-dom'

export const CategoriesFilter = () => {

  // Funcion que controla el despliegue del filtro por categorias
  const openFilter=()=>{
    let menu = document.querySelector("#menu");
    let icon = document.querySelector("#menuIcon");
    // Ocultar o mostrar categorías
    menu.classList.toggle("dNone")
    // Cambiar icono en función de si el menú está abierto o no
    if(menu.classList.contains('dNone')){
      icon.classList.remove("fa-chevron-down")
      icon.classList.add("fa-chevron-up")
    }else{
      icon.classList.add("fa-chevron-down")
      icon.classList.remove("fa-chevron-up")
    }
  }


  return (
    <aside 
      className='p-2 py-sm-3'>
        <h4 onClick={openFilter} className="filtro">
          Categorías &nbsp;
          <i className="fa-solid fa-chevron-down" id='menuIcon'></i>
        </h4>
        <nav className='list-group' id='menu'>
          {/* En la siguiente lista, asignamos de forma condicional la clase de CSS "activeCategory", dependiendo de si la categoría ha sido seleccionada o no por el usuario */}
          <NavLink to={'/recetas/'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Todas las recetas
          </NavLink>
          <NavLink 
            to={'/recetas/desayunos'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Desayunos
          </NavLink>
          <NavLink 
            to={'/recetas/aperitivos'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Aperitivos
          </NavLink>
          <NavLink to={'/recetas/ensaladas'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Ensaladas
          </NavLink>
          <NavLink to={'/recetas/sopas-y-cremas'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Sopas y cremas
            </NavLink>
          <NavLink to={'/recetas/principales'}
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Principales
            </NavLink>
          <NavLink to={'/recetas/postres'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Postres
            </NavLink>
        </nav>
    </aside>
  )
}
