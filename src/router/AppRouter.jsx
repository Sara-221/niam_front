import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { BreakfastPage, DessertsPage, Error404, MainsPage, RecipesPage, SaladsPage, SoupsPage, StartersPage } from '../recipes/pages'

export const AppRouter = () => {

  const authStatus='authenticated'

  return (
    <>
    <Routes>

      {
        authStatus==='not-authenticated' ? <Route path='/auth/*' element={<LoginPage/>}/> 
          : <Route>
              <Route path='/desayunos' element={<BreakfastPage/>}/>
              <Route path='/aperitivos' element={<StartersPage/>}/>
              <Route path='/ensaladas' element={<SaladsPage/>}/>
              <Route path='/sopas-y-cremas' element={<SoupsPage/>}/>
              <Route path='/principales' element={<MainsPage/>}/>
              <Route path='/postres' element={<DessertsPage/>}/>
              <Route path='/' element={<RecipesPage/>}/>
              <Route path='/logout' element={<LoginPage/>}/>
              <Route path='/*' element={<Error404/>}/>
            </Route>
      }
      <Route path='/*' element={<Navigate to='auth/login'/>}/>


    </Routes>
    </>
  )
}
