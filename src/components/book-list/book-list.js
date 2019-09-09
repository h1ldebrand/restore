import React, { useEffect } from 'react';
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';
import WithBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import './book-list.css'


const BookList = (props) => {

    const {books, loading, error} = props;

    useEffect(() => {
        props.fetchBooks()
    },[])

    if(loading) return <Spinner/>
    if(error) return <ErrorIndicator/>

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
    loading: state.loading,
    error: state.error
})

// const mapDispatchToProps = dispatch => ({
//     booksLoaded: newBooks => dispatch(booksLoaded(newBooks))
// })

// const mapDispatchToProps = dispatch => bindActionCreators({booksLoaded}, dispatch)

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
        fetchBooks: fetchBooks(bookstoreService, dispatch)
})

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)