import { useDispatch, useSelector } from "react-redux";
import recipesAPI from "../../api/recipesAPI";
import { clearErrorMsg, onChecking, onLoging, onLogout } from "../../store/auth";


export const useAuthStore = () => {

    const { status, user, errorMsg }= useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    // Iniciar sesión
    const startLogin = async({email,password})=>{
        console.log('Comprobando que el usuario existe en la base de datos...')
        dispatch(onChecking())

        try {
            // Utilizamos axios para recibir los datos de la api
            const res = await recipesAPI.post('/auth/login', {email, password})
            // Almacenamos el token en el local storage
            localStorage.setItem('token', res.data.token)

            // Guardamos el usuario que está logueado
            const currentUser = {
                email: res.data.user.email,
                uid: res.data.user.uid,
            } 
            dispatch(onLoging(currentUser))

        } catch (error) {
            //console.log(error.response?.data.msg)
            dispatch(onLogout('El email o la contraseña no son válidos.'))
            clearErrorMsg()
        }
    }

    // Cerrar sesión
    const startLogout = async()=>{
        // Limpiamos el token
        localStorage.clear()
        // Despachamos el log out
        dispatch(onLogout())
    }

    // Comprobar token
    const checkToken = async()=>{
        // Primero miramos si hay token en el local storage. Si no lo hay, desconectamos la sesión.  
        const token = localStorage.getItem('token')
        if(!token) return dispatch(onLogout())

        // Si hay token, lo renovamos.
        try {
            const res = await recipesAPI.get('auth/renew')
            localStorage.setItem('token', res.data.token)

            const currentUser = {
                    email: res.data.user.email,
                    uid: res.data.user.uid,
            } 
            dispatch(onLoging(currentUser))

            } catch (error) {
                dispatch(onLogout())
            }
        }
    

  return {
    status,
    user,
    errorMsg,
    startLogin,
    startLogout,
    checkToken
  }
}

