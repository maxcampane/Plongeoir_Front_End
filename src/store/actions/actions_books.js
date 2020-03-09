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
        books: books,
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

export const fetchBooks = (categoryName) => {
    return dispatch => {
        dispatch(booksStart());

        axios.get("/books/category/" + categoryName)
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

        // dispatch(bookSuccess([{
        //     id: 11,
        //     title: "Harry Potter",
        //     description: "Description 1",
        //     imageURL: "https://i.imgur.com/n744BL9.png",
        // },{
        //     id: 12,
        //     title: "Naruto",
        //     description: "Description 2",
        //     imageURL: "https://i.imgur.com/n744BL9.png",
        // },{
        //     id: 13,
        //     title: "The Witcher",
        //     description: "Description 3",
        //     imageURL: "https://i.imgur.com/n744BL9.png",
        // },{
        //     id: 14,
        //     title: "La Cousine Bette",
        //     description: "Description 4",
        //     imageURL: "https://i.imgur.com/n744BL9.png",
        // },
        // ].filter(book => book.id === parseInt(bookId))[0]));
        axios.get("/books/" + bookId)
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