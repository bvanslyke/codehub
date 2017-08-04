
import * as React from "react";

export function Repo(props) {
    return (
        <div>
            <h2>Repo</h2>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
}