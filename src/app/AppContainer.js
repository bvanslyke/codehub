// This just hooks into redux's store to retrieve our router's location
// and provide it to <App>.

import { connect } from "react-redux";

import { App } from "./App";

function mapStateToProps({location, app}) {
    const loading = app.loading;
    return {
        location,
        loading
    };
}

const initialState = {
    loading: false
};

export function reducer(state = initialState, action) {
    if (action.meta && action.meta.loading !== undefined) {
        return Object.assign({}, state, {
            loading: action.meta.loading
        });
    }

    return state;
} 

export const AppContainer = connect(mapStateToProps)(App);
