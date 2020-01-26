import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookStoreService from "./services/bookstore-service";
import  { bookstoreServiceContext } from "./components/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookStoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <bookstoreServiceContext.Provider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </bookstoreServiceContext.Provider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
