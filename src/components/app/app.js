import React from 'react';
import './app.css';
import WithBookstoreService from "../hoc/with-bookstore-service";
import { Switch, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const App = (props) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </div>
    );
}

export default WithBookstoreService()(App);