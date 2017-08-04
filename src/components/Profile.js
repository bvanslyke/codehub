import * as React from "react";
import Link from "redux-first-router-link";

import { ACTION_TYPE as repoAction } from "pages/RepoPage";
import { ACTION_TYPE as gistAction } from "pages/GistPage";

export function Profile({user, repos, gists}) {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <UserSummary {...user} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h3>Repositories</h3>
                    {repos.map((repo, index) => (
                        <RepoSummary {...repo} key={index} />
                    ))}
                </div>

                <div className="col-md-6">
                    <h3>Gists</h3>
                    {gists.map((gist, index) => (
                        <GistSummary {...gist} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Display the user's name, Location, and image (either avatar_url or gravatar_url)
function UserSummary({name, location, avatar_url}) {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <div className="media">
                    <div className="media-left">
                        <img src={avatar_url} alt={`Avatar for ${name}`} width="64" />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{name}</h4>
                        Location: {location}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Display repository name, repository description, programming language, number of watchers, number of forks.
function RepoSummary({ name, description, language, watchers_count, forks_count }) {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={{ type: repoAction, payload: { name } }}>
                        {name}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p>{description}</p>
            </div>
            <div className="panel-footer">
                {language}{" "}
                <span className="badge">
                    <span className="glyphicon glyphicon-cutlery"></span>
                    &nbsp;
                    {forks_count} 
                </span>
                <span className="badge">
                    <span className="glyphicon glyphicon-eye-open"></span>
                    &nbsp;
                    {watchers_count}
                </span>
            </div>
        </div>
    );
}

// Display the name and description of the gist
function GistSummary({ id, description, files  }) {
    const fileKeys = Object.keys(files);
    const {filename} = files[fileKeys[0]];
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={{type: gistAction, payload: { id }}}>
                        {filename}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p>{description}</p>
            </div>
        </div>
    );
}
