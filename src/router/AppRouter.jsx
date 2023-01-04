import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RecipesPage } from '../recipes/pages/RecipesPage'

export const AppRouter = () => {

  const authStatus='authenticated'

  return (
    <>
    <Routes>

      {
        authStatus==='not-authenticated' ? <Route path='/auth/*' element={<LoginPage/>}/> : <Route path='/*' element={<RecipesPage/>}/>
      }
      <Route path='/*' element={<Navigate to='auth/login'/>}/>

    </Routes>
    </>
  )
}

