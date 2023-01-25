import React from 'react'
import './Signup.css'
import {useDispatch, useSelector} from 'react-redux'
import {signUp} from '../../redux/actions/authActions'

function Signup() {
  const [user, setUser] = React.useState({})
  const dispatch = useDispatch()


    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(user)
        dispatch(signUp(user))
    }


 
  return (
    <div className="Signup">
        <h1>Signup</h1>
        <form>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} /><br/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br/>
            <button onClick={onSubmit}>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup