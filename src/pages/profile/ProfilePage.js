
import { connect } from "react-redux";
import axios from "axios";

import * as github from "services/github";

export const ACTION_TYPE = "route/PROFILE_PAGE";

export const route = {
    path: "/",
    thunk: profileThunk
};

async function profileThunk(dispatch, getState) {
    if (!getState().githubRoutes) {
        const root = await github.get(github.API_ROOT);
        dispatch({type: "GITHUB_ROOT_RECEIVED", payload: root});
    }

    const userApi = github.user(getState().githubRoutes, "bvanslyke");
    const user = await github.get(userApi);
    dispatch({
        type: "PROFILE_RECEIVED",
        payload: user
    });

    const [repos, gists] = await axios.all([
        github.get(github.repos(user)),
        github.get(github.gists(user))
    ]);
}

export function reducer(state = null, action) {
    switch (action.type) {
    case "PROFILE_RECEIVED":
        return Object.assign({}, state, action.payload);
    }

    return state;
}

function ProfilePage() {
    return (
        <div></div>
    );
}

function mapStateToProps() {
    return {
    };
}

const mapDispatchToProps = {

};

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);