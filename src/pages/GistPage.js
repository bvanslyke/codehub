import { connect } from "react-redux";

import * as github from "services/github";
import { getGithubRoutes } from "data/githubRoot";
import { Gist } from "components/Gist";

export const ACTION_TYPE = "route/GIST_PAGE";

export const route = {
    path: "/gist/:id",
    thunk: gistThunk
};

async function gistThunk(dispatch, getState) {
    const githubRoutes = await getGithubRoutes(dispatch, getState);
    const gistURL = github.gists(githubRoutes, getState().gistPage.id);
    const gist = await github.get(gistURL);
    dispatch({type: "GIST_RECEIVED", payload: gist });
}

const initialState = {
    gist: {},
    id: undefined
};

export function reducer(state = initialState, action) {
    switch (action.type) {
    case ACTION_TYPE:
        // During this page transition action, store the ID from the URL
        return Object.assign({}, state, {
            id: action.payload.id
        });
    case "GIST_RECEIVED":
        return Object.assign({}, state, {
            gist: action.payload
        });
    }

    return state;
}

function mapStateToProps({gistPage}) {
    const { gist } = gistPage;
    return gist;
}

export const GistPageContainer = connect(mapStateToProps)(Gist);