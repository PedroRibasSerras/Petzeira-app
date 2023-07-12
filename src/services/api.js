import axios from 'axios'

const api = axios.create({
	// baseURL: "api.pedroribasserras:3333",
})

api.defaults.withCredentials = true

export default api