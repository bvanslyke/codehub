import { connect } from "react-redux";
import { Repo } from "components/Repo";

import { loadingCreator } from "actions";

export const ACTION_TYPE = "route/REPO_PAGE";

export const route = {
    path: "/:name/commits/",
    thunk: repoThunk
};

async function repoThunk(dispatch) {
    dispatch(loadingCreator(true));
    dispatch({
        type: "REPO_RECEIVED",
        payload: "fake repo data",
        meta: { loading: false }
    });
}

export function reducer(state = {}, action) {
    switch (action.type) {
    case "REPO_RECEIVED":
        return Object.assign({}, state, action.payload);
    default:
    }

    return state;
}

function mapStateToProps(state) {
    return state;
}

export const RepoPageContainer = connect(mapStateToProps)(Repo);