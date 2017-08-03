import * as React from "react";

export function Profile({ gists, repos, user }) {
    return (
        <div>
            <h3>repos</h3>
            <pre>{JSON.stringify(repos)}</pre>
            <h3>gists</h3>
            <pre>{JSON.stringify(gists)}</pre>
            <h3>user</h3>
            <pre>{JSON.stringify(user)}</pre>
        </div>
    );
}