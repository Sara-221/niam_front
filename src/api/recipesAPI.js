import axios from 'axios'

// Conectar front con el back.
const recipesAPI = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

// Interceptor para recoger y enviar el token en el header
recipesAPI.interceptors.request.use(config=>{
    config.headers={
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default recipesAPI;