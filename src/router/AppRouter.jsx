import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../auth/hooks'
import { LoginPage } from '../auth/pages/LoginPage'
import { BreakfastPage, DessertsPage, Error404, MainsPage, RecipesPage, SaladsPage, SoupsPage, StartersPage } from '../recipes/pages'

export const AppRouter = () => {

  // Para conectarse, comprobamos que el usuario esté autentificado y el token.
  const {status, checkToken} = useAuthStore()

  // Ejecutamos la comprobación del token una sola vez (al iniciar sesión)
  useEffect(() => {
    checkToken()
  }, [])

  // Se muestra una pantalla de cargando mientras se inicia sesión
  if(status==='checking'){
    return(
      <div className='container-fluid text-center'>
        <div className='cargando rotacion'></div>
      </div>
    )    
  }

  return (
    <>
    <Routes>
      {/* Ruta condicional dependiendo de si el usuario ha sido autentificado o on */}
      {
        (status==='not-authenticated') ? <Route path='/auth/*' element={<LoginPage/>}/> 
          : <Route path='/auth/*' element={<Navigate to='/recetas'/>}/>   
      }
      
      <Route path='/*' element={<Navigate to='auth/login'/>}/>
      {/* Rutas una vez logueado el usuario */}
      <Route path='/recetas' element={<RecipesPage/>}/>
      <Route path='/recetas/desayunos' element={<BreakfastPage/>}/>
      <Route path='/recetas/aperitivos' element={<StartersPage/>}/>
      <Route path='/recetas/ensaladas' element={<SaladsPage/>}/>
      <Route path='/recetas/sopas-y-cremas' element={<SoupsPage/>}/>
      <Route path='/recetas/principales' element={<MainsPage/>}/>
      <Route path='/recetas/postres' element={<DessertsPage/>}/>
      {/* Página de error */}
      <Route path='/recetas/*' element={<Error404/>}/>

    </Routes>
    </>
  )
}
