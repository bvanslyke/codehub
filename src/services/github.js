import axios from "axios";

export async function get(url) {
    const response = await axios.get(url, {
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
    });

    return response.data;
}


export const API_ROOT = "https://api.github.com";

// TODO: maybe shove gists logic, etc to containers. save just the urls we want using a reducer on
// the page component who will use that url
// and move this reducer somewhere else

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

export function reducer(state = null, action) {
    switch (action.type) {
    case "GITHUB_ROOT_RECEIVED":
        return Object.assign({}, state, action.payload);
    }

    return state;
}