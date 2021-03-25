import { useState } from "react"
import AuthService from "../services/AuthService"

export const Register = () => {
    const [data, setData] = useState({ login: "", password: "", name: "" })
    const _handleSubmit = async e => {
        e.preventDefault()
        const result = await AuthService.register(data)
        if (result) {

        }
    }
    const _onChange = e => {
        e.persist();
        setData(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={_handleSubmit}>
                <input name="login" onChange={_onChange} placeholder="Enter username" />
                <input name="name" onChange={_onChange} placeholder="Enter name" />
                <input name="password" onChange={_onChange} type="password" placeholder="Enter password" />
                <input type="submit" />
            </form>
        </div>
    )
}