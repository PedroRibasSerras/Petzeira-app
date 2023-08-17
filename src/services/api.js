import axios from 'axios'

const api = axios.create({
	baseURL: "http://api.pedroribasserras.space:3333",
})

api.defaults.withCredentials = true

export default api