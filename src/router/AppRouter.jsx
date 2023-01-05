import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RecipesPage } from '../recipes/pages/RecipesPage'
import { StartersPage } from '../recipes/pages/StartersPage'

export const AppRouter = () => {

  const authStatus='authenticated'

  return (
    <>
    <Routes>

      {
        authStatus==='not-authenticated' ? <Route path='/auth/*' element={<LoginPage/>}/> : <Route path='/*' element={<RecipesPage/>}/>
      }
      <Route path='/*' element={<Navigate to='auth/login'/>}/>
      {/* <Route path='/aperitivos' element={<StartersPage/>}/> */}

    </Routes>
    </>
  )
}

