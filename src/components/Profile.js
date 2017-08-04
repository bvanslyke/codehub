import * as React from "react";

export function Profile({user, repos, gists}) {
    return (
        <div>
            <UserSummary {...user} />
            <h3>Repositories</h3>
            {repos.map((repo, index) => (
                <RepoSummary {...repo} key={index} />
            ))}

            <h3>Gists</h3>
            {gists.map((gist, index) => (
                <GistSummary {...gist} key={index} />
            ))}
        </div>
    );
}

// Display the user's name, Location, and image (either avatar_url or gravatar_url)
function UserSummary({name, location, avatar_url}) {
    return (
        <div>
            <h3>User: {name}</h3>
            <p>Location: {location}</p>
            <img src={avatar_url} alt={`Avatar for ${name}`} />
        </div>
    );
}

// Display repository name, repository description, programming language, number of watchers, number of forks.
function RepoSummary({ name, description, language, watchers_count, forks_count }) {
    return (
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>language: {language}</p>
            <p>forks: {forks_count}</p>
            <p>watchers: {watchers_count}</p>
        </div>
    );
}

// Display the name and description of the gist
function GistSummary({ description, files  }) {
    const fileKeys = Object.keys(files);
    const {filename} = files[fileKeys[0]];
    return (
        <div>
            <h4>{filename}</h4>
            <p>{description}</p>
        </div>
    );
}
