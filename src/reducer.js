
/*
 * Root-level reducer.
 */

import { combineReducers } from "redux";
import { reducer as githubApiReducer } from "data/githubRoot";
import { reducer as profileReducer } from "pages/ProfilePage";

// Since we require the redux-first-router reducer to be added to
// our root-level reducer, and redux-first-router's reducer needs
// to be bootstrapped elsewhere, we just take it as an argument here.
export function makeRootReducer(routerReducer) {
    return combineReducers({
        location: routerReducer,
        githubRoutes: githubApiReducer,
        profile: profileReducer
    });
}