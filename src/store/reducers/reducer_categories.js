import * as actionTypes from "../actions/actions_names";
import { updateObject } from '../utility';

const initialState = {
    error: null,
    loading: false,
    categories: [],
};

const categoriesStart = (state, action) => {
    return updateObject(state, {
        error: false,
        loading: true
    });
};

const categoriesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        categories: action.categories,
    });
};

const categoriesFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.categories_START: return categoriesStart(state, action);
        case actionTypes.categories_SUCCESS: return categoriesSuccess(state, action);
        case actionTypes.categories_FAIL: return categoriesFail(state, action);

        default:
            return state;
    }
};

export default reducer;