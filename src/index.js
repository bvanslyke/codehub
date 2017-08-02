
import * as React from "react"; // eslint-disable-line
import { render } from "react-dom";

import { Provider } from "react-redux";

import { connectRoutes } from "redux-first-router";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";

import App from "./App";

const history = createHistory();

const routesMap = { 
    "routes/PROFILE": "/",
    "routes/REPO": "/:name/commits/",
    "route/GIST": "/gist/:id"
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const rootReducer = combineReducers({
    location: reducer,
});

const middlewares = applyMiddleware(middleware);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer, compose(enhancer, middlewares, devTools)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);