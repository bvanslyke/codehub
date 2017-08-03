import * as github from "services/github";

// The first time this is called, dispatch (so that it can be cached)
// the response from Github's API root endpoint. After that, return
// the cached response.
export async function getGithubRoutes(dispatch, getState) {
    const routes = getState().githubRoutes;

    if (!routes) {
        const newRoutes = await github.get(github.API_ROOT);
        dispatch({type: "GITHUB_ROOT_RECEIVED", payload: newRoutes});
        return newRoutes;
    }

    return routes;
}

// This reducer saves the response from API_ROOT so we can look up URLs in the future.
// This should maybe move to a different module.
export function reducer(state = null, action) {
    switch (action.type) {
    case "GITHUB_ROOT_RECEIVED":
        return Object.assign({}, state, action.payload);
    }

    return state;
}
