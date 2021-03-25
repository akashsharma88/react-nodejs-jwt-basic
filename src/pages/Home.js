import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import AuthService from '../services/AuthService'
import BackendService from '../services/BackendService'

export const Home = () => {
    const history = useHistory()
    const [data, setData] = useState(null)
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
