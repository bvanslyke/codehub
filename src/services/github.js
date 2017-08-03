/*
 * Helper functions for interacting with the Github API v3.
 * Not much is required here since Github uses a discoverable API and we aren't
 * really hard-coding API paths.
 */

import axios from "axios";

// Github encourages consumers to explicitly request an API version,
// so here's a helper function to do that with axios and pull out the
// response data.
export async function get(url) {
    const response = await axios.get(url, {
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
    });

    return response.data;
}

// This endpoints provides links to the other Github endpoints we'll use.
export const API_ROOT = "https://api.github.com";


// Below are functions that take a mapping of API route names to URL patterns (e.g. from API_ROOT)
// and allow us to extract and manipulate (e.g. to insert a user id) the URL we want to call.
export function user(urls, username) {
    return urls["user_url"].replace("{user}", username);
}

export function repos(userUrls) {
    return userUrls["repos_url"];
}

export function gists(userUrls, gistID = null) {
    return userUrls["gists_url"].replace(
        "{/gist_id}",
        gistID == null ? "" : `/${gistID}`
    );
}
