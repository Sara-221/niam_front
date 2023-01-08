import { NavLink} from 'react-router-dom'

export const CategoriesFilter = () => {


  return (
    <aside className='p-2 py-sm-3'>
        <h4>Categorías</h4>
        <nav className='list-group'>
          {/* En la siguiente lista, asignamos de forma condicional la clase de CSS "activeCategory", dependiendo de si la categoría ha sido seleccionada o no por el usuario */}
          <NavLink to={'/'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Todas las recetas
          </NavLink>
          <NavLink 
            to={'/desayunos'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Desayunos
          </NavLink>
          <NavLink 
            to={'/aperitivos'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Aperitivos
          </NavLink>
          <NavLink to={'/ensaladas'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Ensaladas
          </NavLink>
          <NavLink to={'/sopas-y-cremas'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Sopas y cremas
            </NavLink>
          <NavLink to={'/principales'}
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Principales
            </NavLink>
          <NavLink to={'/postres'} 
            className={({isActive})=> `list-group-item ${isActive ? 'activeCategory' : 'border-0'}`}>
              Postres
            </NavLink>
        </nav>
    </aside>
  )
}
