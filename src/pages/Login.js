import { useState } from "react"
import { useHistory, useLocation } from "react-router"
import { Link } from "react-router-dom"
import AuthService from "../services/AuthService"

export const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const showMsg = location.state?.from
  const [data, setData] = useState({ login: "", password: "" })
  const _handleSubmit = async e => {
    e.preventDefault()
    const result = await AuthService.login(data)
    if (result) {
      history.push('/home')
    } else {
      alert('authentication fails')
    }
  }
  const _onChange = e => {
    e.persist();
    setData(state => ({ ...state, [e.target.name]: e.target.value }))
  }
  return (
    <div>
      <h1>Login</h1>
      <Link to='/register'>Register</Link>
      {showMsg && <p>You must be login first to go to </p>}
      <form onSubmit={_handleSubmit}>
        <input name="login" onChange={_onChange} />
        <input name="password" onChange={_onChange} type="password" />
        <input type="submit" />
      </form>
    </div>
  )
}