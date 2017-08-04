import * as React from "react";

export function Profile(props) {
    return (
        <div>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
}