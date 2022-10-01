import axios from 'axios'

const cookAxios = axios.create({ baseURL : 'http://localhost:8080'})

cookAxios.interceptors.request.use((request) => {
    return request
})

export default cookAxios