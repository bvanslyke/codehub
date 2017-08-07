/*
 * Bootstraps React, redux, redux-first-router and enables redux dev tools.
 * Enables us to render <AppContainer/>.
 */

import * as React from "react"; // eslint-disable-line
import { render } from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { connectRoutes } from "redux-first-router";

import { routes } from "routes";
import { makeRootReducer } from "reducer";
import { AppContainer } from "app/AppContainer";

// 1. Router
const history = createHistory();
const { reducer: routerReducer, middleware, enhancer } = connectRoutes(history, routes);

// 2. Redux store
const rootReducer = makeRootReducer(routerReducer);
const middlewares = applyMiddleware(middleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store = createStore(
    rootReducer, composeEnhancers(enhancer, middlewares)
);

// 3. React root component
render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("root")
);