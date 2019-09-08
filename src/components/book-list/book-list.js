import React, { useEffect } from 'react';
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';
import WithBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded, booksRequested } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";

import './book-list.css'

const BookList = (props) => {

    const {books, loading} = props;

    useEffect(() => {
        const { bookstoreService, booksLoaded, booksRequested } = props;
        booksRequested();
        bookstoreService.getBooks()
            .then(result => {
                booksLoaded(result);
            })

    },[])

    if(loading) return <Spinner/>

    return (
        <ul className="book-list">
            { books.map(book =>
                <li key={book.id}>
                    <BookListItem book={book} />
                </li>
            )}
        </ul>
    );
};

const mapStateToProps = state => ({
    books: state.books,
    loading: state.loading
})

// const mapDispatchToProps = dispatch => ({
//     booksLoaded: newBooks => dispatch(booksLoaded(newBooks))
// })

// const mapDispatchToProps = dispatch => bindActionCreators({booksLoaded}, dispatch)

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, {booksLoaded, booksRequested})
)(BookList)