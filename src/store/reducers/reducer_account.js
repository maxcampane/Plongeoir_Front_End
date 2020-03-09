import * as actionTypes from "../actions/actions_names";
import { updateObject } from '../utility';

const initialState = {
    error: null,
    loading: false,
    firstName: null,
    lastName: null,
    email: null
};

const accountFetchStart = (state, action) => {
    return updateObject(state, {
        error: false,
        loading: true
    });
};

const accountFetchSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
    });
};

const accountFetchFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const accountUpdateStart = (state, action) => {
    return updateObject(state, {
        error: false,
        loading: true
    });
};

const accountUpdateSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
    });
};

const accountUpdateFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.account_FETCH_START: return accountFetchStart(state, action);
        case actionTypes.account_FETCH_SUCCESS: return accountFetchSuccess(state, action);
        case actionTypes.account_FETCH_FAIL: return accountFetchFail(state, action);
        case actionTypes.account_UPDATE_START: return accountUpdateStart(state, action);
        case actionTypes.account_UPDATE_SUCCESS: return accountUpdateSuccess(state, action);
        case actionTypes.account_UPDATE_FAIL: return accountUpdateFail(state, action);

        default:
            return state;
    }
};

export default reducer;