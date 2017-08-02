
export const ACTION_TYPE = "route/REPO_PAGE";

export const route = {
    path: "/:name/commits/",
    thunk: repoThunk
};

async function repoThunk(dispatch) {
    dispatch({type: "REPO_RECEIVED", payload: "fake repo data"});
}