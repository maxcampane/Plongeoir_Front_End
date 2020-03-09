import * as actionTypes from "./actions_names";
import axios from "../../config/axios-orders";

export const authStart = () => {
    return {
        type: actionTypes.auth_START
    };
};

export const authSuccess = (books) => {
    return {
        type: actionTypes.auth_SUCCESS,
        books: books
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
            password: "admin"
        }

        axios.post("/login", _data)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
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

        axios.post("signup", formData)
            .then(response => {
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
                dispatch(authFail(error));
            });
    }
};