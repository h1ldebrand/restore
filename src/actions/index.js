import {FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from "../constants";

export const booksLoaded = (newBooks) => {
    return {
        type: FETCH_BOOKS_REQUEST,
        payload: newBooks
    }
}

export const booksRequested = () => {
    return {
        type: FETCH_BOOKS_SUCCESS
    }
}

export const booksError = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

export const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(result => dispatch(booksLoaded(result)))
        .catch(error => dispatch(booksError(error)))
}