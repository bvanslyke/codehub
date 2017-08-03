// Use our router configuration to determine which container component to render,
// from the /pages/ subdirectory.

import * as React from "react";

import { containers } from "routes";

export function App(props) {
    const type = props.location.type;
    const ChildContainer = containers[type];

    return (
        <div>
            <h1>header</h1>
            <div>
                <ChildContainer />
            </div>
            <footer>footer</footer>
        </div>
    );
}
