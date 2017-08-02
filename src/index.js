
import * as React from "react"; // eslint-disable-line
import { render } from "react-dom";

import { Provider } from "react-redux";

import { connectRoutes } from "redux-first-router";
import { createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";

import { routes } from "routes";
import { makeRootReducer } from "reducer";
import { AppContainer } from "app/AppContainer";

const history = createHistory();

const { reducer: routerReducer, middleware, enhancer } = connectRoutes(history, routes);

const rootReducer = makeRootReducer(routerReducer);
const middlewares = applyMiddleware(middleware);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer, compose(enhancer, middlewares, devTools)
);

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("root")
);