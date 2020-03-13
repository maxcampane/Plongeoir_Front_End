import * as actionTypes from "./actions_names";
import axios from "../../config/axios-orders";

export const authStart = () => {
    return {
        type: actionTypes.auth_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.auth_SUCCESS,
        token: authData.token,
        userId: authData.userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.auth_FAIL,
        error: error
    };
};

export const authLogin = (data) => {
    return dispatch => {
        dispatch(authStart());

        // let _data = {
        //     email: "admin@test.com",
        //     password: "admin",
        // };

        axios.post("/login", data)
            .then(response => {      //s  * min * h
                const expirationTime = new Date(response.data.expires);//60 * 60 * 10;

                localStorage.setItem("token", response.data.token);
                localStorage.setItem("expirationDate", expirationTime);
                localStorage.setItem("userId", response.data.userId);
                dispatch(authSuccess(response.data));
                dispatch(checkAuthTimeout(expirationTime - new Date()));
            })
            .catch(error => {
                alert("Mauvais identifiants. Veuillez réessayer.");
                dispatch(authFail(error));
                console.log(error);
            });
    }
};

export const authSignUp = (formData) => {
    return dispatch => {
        dispatch(authStart());

        axios.post("/signup", formData)
            .then(response => {
                const expirationTime = new Date(response.data.expires);//60 * 60 * 10;

                localStorage.setItem("token", response.data.token);
                localStorage.setItem("expirationDate", expirationTime);
                localStorage.setItem("userId", response.data.userId);

                dispatch(authSuccess(response.data));
                dispatch(checkAuthTimeout(expirationTime - new Date()));
            })
            .catch(error => {
                alert("Un problème est survenu lors de l'inscription. Veuillez réessayer.");
                dispatch(authFail(error));
            });
    }
};

export const authLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.auth_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogOut());
        }, expirationTime * 1000);
    };
};

export const authCheckTokenValidity = () => {
    return dispatch => {
        const token = localStorage.getItem("token");

        if(!token){
            dispatch(authLogOut());
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"));
            if(expirationDate <= new Date()){
                dispatch(authLogOut());
            } else {
                const authData = {
                    token: token,
                    userId: localStorage.getItem("userId"),
                };

                dispatch(authSuccess(authData));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
};
