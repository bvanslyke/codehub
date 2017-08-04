
import * as React from "react";

export function Gist(props) {
    return (
        <div>
            <h2>Gist</h2>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
}