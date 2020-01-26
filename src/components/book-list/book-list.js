import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";



const BookList = ({ books, onAddedToCart }) => {

    return (
        <ul className="book-list row">
            {
                (books).map((book) => {
                    return(
                        <li key={book.id}>
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

const BookListContainer = ({books, loading, error, onAddedToCart, fetchBooks}) => {
    useEffect(() => {
        fetchBooks();
    },[]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>;
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);