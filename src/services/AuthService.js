import axios from "axios";
import { getItem, removeItem, setItem } from "../utils/helpers";
import {API_URL} from '../config'

class AuthService {
    login = async ({ login, password }) => {
        try {
            const result = await axios.post(`${API_URL}/user/login`, { login, password });
            if (result.data.accessToken) {
                setItem({ key: 'user', data: result.data })
            } else {
                console.log(result.data.message)
            }
            return result.data;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    register = async ({ login, password, name }) => {
        try {
            const result = await axios.post(`${API_URL}/user/register`, { login, password, name });
            return result.data
        } catch (error) {
            console.log(error)
            return false
        }
    }
    logout = async () => {
        removeItem('user')
    }
    getCurrentUser = async () => {
        try {
            return getItem('user');
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

export default new AuthService()