import React, { useEffect } from 'react';
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';
import WithBookstoreService from "../hoc/with-bookstore-service";

import './book-list.css'
import {BOOKS_LOADED} from "../../constants";

const BookList = (props) => {

    useEffect(() => {
        const { bookstoreService } = props;
        const data = bookstoreService.getBooks();
    })

    return (
        <ul>
            { props.books.map(book =>
                <li key={book.id}>
                    <BookListItem book={book} />
                </li>
            )}
        </ul>
    );
};

const mapStateToProps = state => ({
    books: state.books
})

const mapDispatchToProps = dispatch => ({
    booksLoaded: newBooks => dispatch({
        type: BOOKS_LOADED,
        payload: newBooks
    })
})

export default WithBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
);