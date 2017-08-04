// Use our router configuration to determine which container component to render,
// from the /pages/ subdirectory.

import * as React from "react";
import Link from "redux-first-router-link";

import { ACTION_TYPE as profileAction } from "pages/ProfilePage";
import { containers } from "routes";

export function App(props) {
    const type = props.location.type;
    const loading = props.loading;
    const ChildContainer = containers[type];

    return (
        <div className="container">
            <h1>
                <Link to={{ type: profileAction }}>Header</Link>
            </h1>
            <div>
                { loading
                    ? "Loading..."
                    : <ChildContainer />
                }
            </div>
            <footer>footer</footer>
        </div>
    );
}
