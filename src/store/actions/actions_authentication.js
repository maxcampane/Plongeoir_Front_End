import * as actionTypes from "./actions_names";
import axios from "../../config/axios-orders";

export const authStart = () => {
    return {
        type: actionTypes.auth_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.auth_SUCCESS,
        token: token,
        userId: userId,
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

        const _data = {
            email: "admin@test.com",
            password: "admin",
        };

        axios.post("/login", _data)
            .then(response => {

                const expirationTime = 0.25 * 60;
                localStorage.setItem("token", response.data);
                localStorage.setItem("expirationDate", new Date(new Date().getTime() + expirationTime * 1000));
                dispatch(authSuccess(response.data, response.data.userId));
                dispatch(checkAuthTimeout(expirationTime));
            })
            .catch(error => {
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
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
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
        console.log("[checkAuthTimeout] " + expirationTime * 1000);

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
                const userId = localStorage.getItem("userId");
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
};