import { connect } from "react-redux";
import { Repo } from "components/Repo";

export const ACTION_TYPE = "route/REPO_PAGE";

export const route = {
    path: "/:name/commits/",
    thunk: repoThunk
};

async function repoThunk(dispatch) {
    dispatch({type: "REPO_RECEIVED", payload: "fake repo data"});
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

const mapDispatchToProps = {

};

export const RepoPageContainer = connect(mapStateToProps, mapDispatchToProps)(Repo);