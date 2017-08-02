
import { combineReducers } from "redux";
import { reducer as githubApiReducer } from "services/github";
import { reducer as profileReducer } from "pages/profile/ProfilePage";

export function makeRootReducer(routerReducer) {
    return combineReducers({
        location: routerReducer,
        githubRoutes: githubApiReducer,
        profile: profileReducer
    });
}