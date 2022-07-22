import axios from "axios";
import { url } from "../../api";
import { toast } from 'react-toastify';

export const signUp = (user) => {
    return (dispatch) => {
        axios.post(`${url}/register`, user)
            .then((user) => {
                dispatch({
                    type: "SIGN_UP",
                    user
                })
            })
            .catch(error => {
                console.log(error.response)

                toast.response(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
};

export const signIn = (creds) => {
    return (dispatch) => {
        axios.post(`${url}/login`, creds)
            .then(token => {
                localStorage.setItem("token", token.data)

                dispatch({
                    type: "SIGN_IN",
                    token: token.data
                })
            })
            .catch(error => {
                console.log(error.response)

                toast.response(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
};

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token
        if (token) {
            dispatch({
                type: "USER_LODED",
                token
            })
        } else return null;
    }
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT",
        })
    }
};
