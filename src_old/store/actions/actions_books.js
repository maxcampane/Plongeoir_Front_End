import * as actionTypes from "./actions_names";
import axios from "../../config/axios-orders";

export const bookStart = () => {
    return {
        type: actionTypes.book_START
    };
};

export const booksStart = () => {
    return {
        type: actionTypes.books_START
    };
};

export const bookSuccess = (book) => {
    return {
        type: actionTypes.book_SUCCESS,
        book: book
    };
};

export const booksSuccess = (books) => {
    return {
        type: actionTypes.books_SUCCESS,
        books: books
    };
};

export const bookFail = (error) => {
    return {
        type: actionTypes.book_FAIL,
        error: error
    };
};

export const booksFail = (error) => {
    return {
        type: actionTypes.books_FAIL,
        error: error
    };
};

export const fetchBooks = (categoryId) => {
    return dispatch => {
        dispatch(booksStart());

        axios.get("/books/category/" + categoryId)
            .then(response => {
                dispatch(booksSuccess(response.data));
            })
            .catch(error => {
                dispatch(booksFail(error));
                console.log(error);
            });
    }
};

export const fetchBook = (bookId) => {
    return dispatch => {
        dispatch(bookStart());

        axios.get("/books/" + bookId)
            .then(response => {
                dispatch(bookSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(bookFail(error));
            });
    }
}