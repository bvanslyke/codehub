import { connect } from "react-redux";

import { getGithubRoutes } from "data/githubRoot";
import * as github from "services/github";
import { Repo } from "components/Repo";
import { loadingCreator } from "actions";
import { GITHUB_USER } from "config";

export const ACTION_TYPE = "route/REPO_PAGE";

export const route = {
    path: "/:name/commits/",
    thunk: repoThunk
};

async function repoThunk(dispatch, getState) {
    dispatch(loadingCreator(true));

    const githubRoutes = await getGithubRoutes(dispatch, getState);
    const repoURL = github.repo(githubRoutes, GITHUB_USER, getState().repoPage.name);
    const repo = await github.get(repoURL);

    dispatch({
        type: "REPO_RECEIVED",
        payload: repo,
        meta: { loading: false }
    });
}

const initialState = {
    name: undefined,
    repo: {}
};

export function reducer(state = initialState, action) {
    switch (action.type) {
    case ACTION_TYPE:
        return Object.assign({}, state, {
            name: action.payload.name
        });
    case "REPO_RECEIVED":
        return Object.assign({}, state, {
            repo: action.payload
        });
    default:
    }

    return state;
}

function mapStateToProps({repoPage}) {
    const { repo } = repoPage;
    return repo;
}

export const RepoPageContainer = connect(mapStateToProps)(Repo);