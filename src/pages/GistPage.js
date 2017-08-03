
export const ACTION_TYPE = "route/GIST_PAGE";

export const route = {
    path: "/gist/:id",
    thunk: gistThunk
};

async function gistThunk(dispatch) {
    dispatch({type: "GIST_RECEIVED", payload: "fake profile data"});
}
