
import { connect } from "react-redux";
import axios from "axios";

import * as github from "services/github";
import { Profile } from "components/Profile";

export const ACTION_TYPE = "route/PROFILE_PAGE";

export const route = {
    path: "/",
    thunk: profileThunk
};

// 1. Find out the URLs to access a user's gists and repos by calling the users API.
// 2. In parallel, grab the user's gists and repos.
// 3. Dispatch an action to broadcast what we've downloaded here.
async function profileThunk(dispatch, getState) {
    // TODO: move this into helper. probably want to co-locate with github api reducer
    if (!getState().githubRoutes) {
        const root = await github.get(github.API_ROOT);
        dispatch({type: "GITHUB_ROOT_RECEIVED", payload: root});
    }

    const userApi = github.user(getState().githubRoutes, "bvanslyke");
    const user = await github.get(userApi);

    const [repos, gists] = await axios.all([
        github.get(github.repos(user)),
        github.get(github.gists(user))
    ]);

    dispatch({
        type: "PROFILE_RECEIVED",
        payload: { user, repos, gists }
    });
}

// Store responses to user, repo, and gist APIs for a particular user.
const initialState = {
    user: {},
    repo: {},
    gists: {}
};

export function reducer(state = initialState, action) {
    switch (action.type) {
    case "PROFILE_RECEIVED":
        return Object.assign({}, state, action.payload);
    }

    return state;
}

function mapStateToProps({ profile }) {
    const { user, repo, gists } = profile;
    return { user, repo, gists };
}

const mapDispatchToProps = {

};

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);