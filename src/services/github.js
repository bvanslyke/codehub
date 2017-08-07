/*
 * Helper functions for interacting with the Github API v3.
 * Not much is required here since Github uses a discoverable API and we aren't
 * really hard-coding API paths.
 */

import axios from "axios";

// Github encourages consumers to explicitly request an API version,
// so here's a helper function to do that with axios and pull out the
// response data.
export async function get(url, params = {}) {
    const response = await axios.get(url, {
        headers: {
            Accept: "application/vnd.github.v3+json"
        },
        params
    });

    return response.data;
}

// This endpoints provides links to the other Github endpoints we'll use.
export const API_ROOT = "https://api.github.com";


// Below are functions that take a mapping of API route names to URL patterns (e.g. from API_ROOT)
// and allow us to extract and manipulate (e.g. to insert a user id) the URL we want to call.

// Profile info for a specific user
export function user(urls, username) {
    return urls["user_url"].replace("{user}", username);
}

// List of repos for a user
export function repos(userUrls) {
    return userUrls["repos_url"];
}

// A specific repo
export function repo(urls, owner, repoName) {
    return urls["repository_url"]
        .replace("{owner}", owner)
        .replace("{repo}", repoName);
}

// List commits for a repo
// n.b.: Note if the URLs object comes from a repo object, then `owner` and `repoName`
// will be ignored because the URL template vars won't be there.
export function commits(repoUrls, owner, repoName) {
    return repoUrls["commits_url"]
        .replace("{owner}", owner)
        .replace("{repo}", repoName)
        .replace("{/sha}", "");
}

// List of gists for a user, or if gistID specified then an individual gist.
export function gists(urls, gistID = null) {
    return urls["gists_url"].replace(
        "{/gist_id}",
        gistID == null ? "" : `/${gistID}`
    );
}
