import axios from "axios";
import { getItem } from "../utils/helpers";
import { API_URL } from '../config'
axios.interceptors.request.use(config => {
    const user = getItem('user');
    if (user)
        config.headers.Authorization = `Bearer ${user.accessToken}`
    return config
});

class BackendService {
    getProfile = async () => {
        try {
            const result = await axios.get(`${API_URL}/home/profile`);
            return result.data;
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default new BackendService()