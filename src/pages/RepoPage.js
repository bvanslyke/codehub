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

    const repoName = getState().repoPage.name;

    const githubRoutes = await getGithubRoutes(dispatch, getState);
    const repoURL = github.repo(githubRoutes, GITHUB_USER, repoName);
    const repo = await github.get(repoURL);

    const commitsURL = github.commits(repo, GITHUB_USER, repoName);
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1); 
    const commits = await github.get(commitsURL, { since: monthAgo.toISOString() });

    dispatch({
        type: "COMMITS_RECEIVED",
        payload: commits,
        meta: { loading: false }
    });
}

const initialState = {
    name: undefined,
    commits: []
};

export function reducer(state = initialState, action) {
    switch (action.type) {
    case ACTION_TYPE:
        return Object.assign({}, state, {
            name: action.payload.name
        });
    case "COMMITS_RECEIVED":
        return Object.assign({}, state, {
            commits: action.payload
        });
    default:
    }

    return state;
}

function mapStateToProps({repoPage}) {
    return repoPage;
}

export const RepoPageContainer = connect(mapStateToProps)(Repo);