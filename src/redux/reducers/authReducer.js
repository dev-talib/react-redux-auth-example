import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    email: null,
    _id: null,
};

const authReducer =(state = initialState, action) => {
    switch (action.type) {
        case "USER_LOADED":
        case "SIGN_IN":    
        case "SIGN_UP":
            // toast.success("Welcome..",{
            //     position: toast.POSITION.TOP_CENTER
            // });
            const user = jwtDecode(action.token);
            return {
                ...state,
                token: action.token,
                email: user.email,
                _id: user._id,
            };
        case "SIGN_OUT":
            localStorage.removeItem("token");
            toast("Goodbye...",{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000

            })   
            return {
                token: null,
                email: null,
                _id: null,
            }; 
        default:
            return state;
    }
}

export default authReducer;