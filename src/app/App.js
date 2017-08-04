// Use our router configuration to determine which container component to render,
// from the /pages/ subdirectory.

import * as React from "react";
import Link from "redux-first-router-link";

import { ACTION_TYPE as profileAction } from "pages/ProfilePage";
import { containers } from "routes";
import { GITHUB_USER } from "config";

export function App(props) {
    const type = props.location.type;
    const loading = props.loading;
    const ChildContainer = containers[type];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link 
                                    to={{ type: profileAction }}
                                    className="navbar-brand"
                                >
                                    CodeHub: { GITHUB_USER }
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div>
                { loading
                    ? "Loading..."
                    : <ChildContainer />
                }
            </div>
        </div>
    );
}
