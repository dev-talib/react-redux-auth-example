import React, {useEffect} from 'react';
import Navbar from './components/Header/Navbar'
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from './pages/Home/Home';
import {useDispatch} from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from './redux/actions/authActions';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>   
      </Router>
    </div>
  );
}

export default App;
