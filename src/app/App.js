import * as React from "react";

export function App(props) {
    return (
        <div>
            <h1>header</h1>
            <div>
                midsection
                <pre>{JSON.stringify(props.location, null, 4)}</pre>
            </div>
            <footer>footer</footer>
        </div>
    );
}
