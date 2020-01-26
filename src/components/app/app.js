import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from "../shop-header";
import { HomePage, CartPage } from '../pages';

import './app.css';
import {connect} from "react-redux";

const itemFunc = (cartItems) => {
    let numItems = 0;

    if (cartItems.length) {
        cartItems.forEach((item) => numItems += item.count);
        return numItems;
    }
    return numItems
};

const App = ({ total, cartItems }) => {

    return (
        <main role="main" className="container">
            <ShopHeader numItems={cartItems} total={total}/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={CartPage} />
            </Switch>
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        total: state.orderTotal,
        cartItems: itemFunc(state.cartItems)
    };
};

export default connect(mapStateToProps)(App);