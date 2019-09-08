import React from 'react';
import BookList from "../book-list";

const Home = (props) => {
    return (
        <div>
            <BookList books={[]} />
        </div>
    );
}

export default Home;