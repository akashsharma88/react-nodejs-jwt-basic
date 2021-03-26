import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import AuthService from '../services/AuthService'
import BackendService from '../services/BackendService'
import { Login } from '../types'

export const Home = () => {
    const history = useHistory()
    const [data, setData]: [Login | undefined, React.Dispatch<React.SetStateAction<Login | undefined>>] = useState()
    const getProfile = async () => {
        const user = await BackendService.getProfile()
        if (user) {
            setData(user)
        }
    }
    useEffect(() => {
        getProfile()
    }, [])
    const _logout = async () => {
        await AuthService.logout();
        history.replace('/')
    }
    return (
        <div>
            <h1>Hi {data?.name}</h1>

            <button onClick={_logout}>Logout</button>
        </div>
    )
}
