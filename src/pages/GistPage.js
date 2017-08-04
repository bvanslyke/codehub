import { connect } from "react-redux";

import { Gist } from "components/Gist";

export const ACTION_TYPE = "route/GIST_PAGE";

export const route = {
    path: "/gist/:id",
    thunk: gistThunk
};

async function gistThunk(dispatch) {
    dispatch({type: "GIST_RECEIVED", payload: "fake profile data"});
}

export function reducer(state = {}, action) {
    switch (action.type) {
    case "GIST_RECEIVED":
        return Object.assign({}, state, action.payload);
    }

    return state;
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {

};

export const GistPageContainer = connect(mapStateToProps, mapDispatchToProps)(Gist);