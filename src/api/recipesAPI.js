import axios from 'axios'

// Conectar front con el back.
const recipesAPI = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default recipesAPI;