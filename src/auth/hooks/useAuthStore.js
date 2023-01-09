import { useDispatch, useSelector } from "react-redux";
import { clearErrorMsg, onChecking, onLoging, onLogout } from "../../store/auth";


export const useAuthStore = () => {

    const { status, user, errorMsg }= useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    // Iniciar sesión
    const startLogin = async(user)=>{
        console.log('Comprobando que el usuario existe en la base de datos...')
        dispatch(onChecking())

        try {
            //To-do
        } catch (error) {
            console.log(error)
            dispatch(onLogout('Email o contraseña incorrectos.'))
            // Pasados 100 ms, reseteamos el error.
            setTimeout(()=>{
                dispatch(clearErrorMsg)
            })
        }
    }

    // Cerrar sesión
    const startLogout = async()=>{
        dispatch(onLogout)
    }

  return {
    errorMsg,
    startLogin,
    startLogout
  }
}

