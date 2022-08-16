import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './base.scss';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./Redux/reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
