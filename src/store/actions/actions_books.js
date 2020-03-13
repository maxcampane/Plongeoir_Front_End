import * as actionTypes from "./actions_names";
import axios from "../../config/axios-orders";

export const booksStart = () => {
    return {
        type: actionTypes.books_START
    };
};

export const booksSuccess = (books) => {
    return {
        type: actionTypes.books_SUCCESS,
        books: books,
    };
};

export const booksFail = (error) => {
    return {
        type: actionTypes.books_FAIL,
        error: error
    };
};

export const bookStart = () => {
    return {
        type: actionTypes.book_START
    };
};

export const bookSuccess = (book) => {
    return {
        type: actionTypes.book_SUCCESS,
        book: book
    };
};

export const bookFail = (error) => {
    return {
        type: actionTypes.book_FAIL,
        error: error
    };
};

export const fetchBooks = (categoryName, token) => {
    return dispatch => {
        dispatch(booksStart());



        axios.get("/api/books/category/" + categoryName, { headers: { "X-AUTH-TOKEN": token } })
            .then(response => {
                dispatch(booksSuccess(response.data));
            })
            .catch(error => {
                dispatch(booksFail(error));
                console.log(error);
            });
    }
};

export const fetchBook = (bookId, token) => {
    return dispatch => {
        dispatch(bookStart());

        axios.get("/api/books/" + bookId, { headers: { "X-AUTH-TOKEN": token }})
            .then(response => {
                dispatch(bookSuccess(response.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(bookFail(error));
            });
    }
};

export const filterBooks = (books, filterValue) => {
    return {
        type: actionTypes.books_FILTER,
        filteredBooks: books.filter(book => book.title.toLowerCase().includes(filterValue))
    };
};