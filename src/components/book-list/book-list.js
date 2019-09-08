import React, { useEffect } from 'react';
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';
import WithBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded } from "../../actions";

import './book-list.css'

const BookList = (props) => {

    const {books} = props;

    useEffect(() => {
        const { bookstoreService, booksLoaded } = props;
        const data = bookstoreService.getBooks();

        booksLoaded(data);
    },[])

    return (
        <ul>
            { books.map(book =>
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

// const mapDispatchToProps = dispatch => ({
//     booksLoaded: newBooks => dispatch(booksLoaded(newBooks))
// })

// const mapDispatchToProps = dispatch => bindActionCreators({booksLoaded}, dispatch)

export default WithBookstoreService()(
    connect(mapStateToProps, {booksLoaded})(BookList)
);