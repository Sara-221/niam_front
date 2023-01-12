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
            console.log(res.data.user)
            // Guardamos el usuario que está logueado
            const currentUser = {
                email: res.data.user.email,
                uid: res.data.user.uid,
            } 
            dispatch(onLoging(currentUser))

        } catch (error) {
            console.log(error)
            dispatch(onLogout('Email o contraseña incorrectos.'))
            // Pasados 50 ms, reseteamos el error.
            setTimeout(()=>{
                dispatch(clearErrorMsg)
            }, 50)
        }
    }

    // Cerrar sesión
    const startLogout = async()=>{
        dispatch(onLogout())
    }

    // Comprobar token
    const checkToken=async()=>{
        // Primero miramos si hay token en el local storage. Si es el caso, comprobamos que coincida con el de la base de datos.
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(onLogout())
        }else{
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

