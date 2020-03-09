import * as actionTypes from "../actions/actions_names";
import { updateObject } from '../utility';

const initialState = {
    error: null,
    loading: false,
    books: [],
    filteredBooks: [],
    book: null
};

const bookStart = (state, action) => {
    return updateObject(state, {
        error: false,
        loading: true
    });
};

const booksStart = (state, action) => {
    return updateObject(state, {
        error: false,
        loading: true
    });
};

const bookSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        book: action.book
    });
};

const booksSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        books: action.books,
        filteredBooks: action.books,
    });
};

const bookFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const booksFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.book_START: return bookStart(state, action);
        case actionTypes.book_SUCCESS: return bookSuccess(state, action);
        case actionTypes.book_FAIL: return bookFail(state, action);
        case actionTypes.books_START: return booksStart(state, action);
        case actionTypes.books_SUCCESS: return booksSuccess(state, action);
        case actionTypes.books_FAIL: return booksFail(state, action);

        default:
            return state;
    }
};

export default reducer;