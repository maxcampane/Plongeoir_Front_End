import * as actionTypes from "../actions/actions_names";
import { updateObject } from '../utility';

const initialState = {
    error: null,
    loading: false,
    token: null,
    expirationTime: null,
    email: "",
    firstName: "",
    lastName: "",
};

const authStart = (state, action) => {
    return updateObject(state, {
        error: false,
        loading: true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        token: action.token,
        expirationTime: action.expirationTime,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.auth_START: return authStart(state, action);
        case actionTypes.auth_SUCCESS: return authSuccess(state, action);
        case actionTypes.auth_FAIL: return authFail(state, action);

        default:
            return state;
    }
};

export default reducer;