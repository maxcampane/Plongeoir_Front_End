import * as actionTypes from "./actions_names";
import axios from "../../config/axios-orders";

export const fetchStart = () => {
    return {
        type: actionTypes.account_FETCH_START,
    };
};

export const fetchSuccess = (userData) => {
    return {
        type: actionTypes.account_FETCH_SUCCESS,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
    };
};

export const fetchFail = (error) => {
    return {
        type: actionTypes.account_FETCH_FAIL,
        error: error
    };
};

export const fetchUserData = (token) => {
    return dispatch => {
        dispatch(fetchStart());

        axios.get("/api/users", { headers: { "X-AUTH-TOKEN": token }})
            .then(response => {
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchFail(error))
            })
    }
};

export const updateStart = () => {
    return {
        type: actionTypes.account_UPDATE_START,
    };
};

export const updateSuccess = () => {
    return {
        type: actionTypes.account_UPDATE_SUCCESS,
    };
};

export const updateFail = (error) => {
    return {
        type: actionTypes.account_UPDATE_FAIL,
        error: error
    };
};

export const updateUserData = (token, updateData) => {
    return dispatch => {
        dispatch(updateStart());

        axios.patch("/api/user", { headers: { "X-AUTH-TOKEN": token }}, updateData)
            .then(response => {
                console.log(response);
                dispatch(updateSuccess());
            })
            .catch(error => {
                console.log(error);
                dispatch(updateFail(error));
            });
    };
};
