import React from 'react';
import './app.css';
import WithBookstoreService from "../hoc/with-bookstore-service";
import { Switch, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ShopHeader from "../shop-header";

const App = (props) => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={240} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </main>
    );
}

export default WithBookstoreService()(App);