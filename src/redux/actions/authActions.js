import axios from 'axios';
import {toast} from "react-toastify";

export const signUp = (user)=>{
    return (dispatch)=>{
        axios.post('http://localhost:4000/api/auth/signup', user)
        .then(res=>{
            toast.success("You are Signup successfully",{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            });
            localStorage.setItem('token', res.data.token)
            dispatch({
                type: 'SIGN_UP',
                token: res.data.token
            })
        })
        .catch((err)=>{
            toast.error(err.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            })   
        })

    }
}

export const signIn = (creds)=>{
    return (dispatch)=>{
        axios.post('http://localhost:4000/api/auth/login', creds)
        .then(res=>{
            toast.success("You are Sigin successfully",{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000
            });
            localStorage.setItem('token', res.data.token)
            dispatch({
                type: 'SIGN_IN',
                token: res.data.token
            })
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            })    
        })
    }
}

export const loadUser = ()=>{
    return (dispatch, getState)=>{
        const token = getState().auth.token;
        if(token){
           dispatch({
               type: 'USER_LOADED',
               token: token
           })
        }else return null;
    }
}    

export const signOut = ()=>{
    return (dispatch)=>{
        localStorage.removeItem('token');
        dispatch({
            type: 'SIGN_OUT'
        })
    }
}
