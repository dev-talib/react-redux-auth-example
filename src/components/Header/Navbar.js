import React from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signOut} from '../../redux/actions/authActions'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state) => state);
  console.log(state.auth);
  
  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/login')
  }

  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        <h2>Logo</h2>
      </div>  
      <div>{state?.auth._id}</div>
      <div className="Navbar_links">
        
        {state?.auth._id ? (
        <> 
           <Link to="/dashboard">Dashboard</Link>
           <Link to="/" onClick={handleSignOut}>SignOut</Link>
        </>  
        ):(
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
         
        )}
       
      </div>  
    </div>
  )
}

export default Navbar