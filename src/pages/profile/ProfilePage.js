
export const ACTION_TYPE = "route/PROFILE_PAGE";

export const route = {
    path: "/",
    thunk: profileThunk
};

async function profileThunk(dispatch) {
    dispatch({type: "PROFILE_RECEIVED", payload: "fake profile data"});
}