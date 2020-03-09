import * as actionTypes from "./actions_names";
import axios from "../../config/axios-orders";

export const categoriesStart = () => {
    return {
        type: actionTypes.categories_START
    };
};

export const categoriesSuccess = (categories) => {
    return {
        type: actionTypes.categories_SUCCESS,
        categories: categories
    };
};

export const categoriesFail = (error) => {
    return {
        type: actionTypes.categories_FAIL,
        error: error
    };
};

export const fetchCategories = (token) => {
    return dispatch => {
        dispatch(categoriesStart());

        axios.get("/api/books/categories", { "headers": { "X-AUTH-TOKEN": token }})
            .then(response => {
                dispatch(categoriesSuccess(response.data));
            })
            .catch(error => {
                dispatch(categoriesFail(error));
                console.log(error);
            });
    }
};





