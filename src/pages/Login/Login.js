import React from 'react'
import './Login.css'
import {useDispatch, useSelector} from 'react-redux'
import {signIn} from '../../redux/actions/authActions'

function Login() {
  const [user, setUser] = React.useState({})
  const dispatch = useDispatch()


    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(signIn(user))
    }


 
  return (
    <div className="Login">
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} /><br/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br/>
            <button onClick={onSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login