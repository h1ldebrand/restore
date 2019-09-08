import React from 'react';
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";

const Home = (props) => {
    return (
        <div>
            <BookList books={[]} />
            <ShoppingCartTable/>
        </div>
    );
}

export default Home;