import * as github from "./github";

describe("Github service", () => {
    test("user", () => {
        expect(
            github.user({
                "user_url": "https://api.example.com/users/{user}"
            }, "Facebook")
        ).toEqual("https://api.example.com/users/Facebook");
    });

    test("repo", () => {
        expect(
            github.repo({
                "repository_url": "https://api.example2.com/repo/{owner}/{repo}",
            }, "someperson", "somerepo")
        ).toEqual("https://api.example2.com/repo/someperson/somerepo");
    });

    test("commits", () => {
        // From the global URL list
        expect(
            github.commits({
                "commits_url": "https://api.github.com/repos/{owner}/{repo}/commits{/sha}",
            }, "owner", "reponame")
        ).toEqual("https://api.github.com/repos/owner/reponame/commits");

        // From the repo URL list
        expect(
            github.commits({
                "commits_url": "https://api.github.com/repos/facebook/360-Capture-SDK/commits{/sha}",
            }, "ignored owner", "ignored reponame")
        ).toEqual("https://api.github.com/repos/facebook/360-Capture-SDK/commits");
    });

    test("gists", () => {
        const urls = {
            "gists_url": "https://api.example.com/users/facebook/gists{/gist_id}"
        };

        // No gist id given
        expect(github.gists(urls)).toEqual("https://api.example.com/users/facebook/gists");

        // Gist id given
        expect(github.gists(urls, 1234)).toEqual("https://api.example.com/users/facebook/gists/1234");
    });
});

export function user(urls, username) {
    return urls["user_url"].replace("{user}", username);
}


// A specific repo
export function repo(urls, owner, repoName) {
    return urls["repository_url"]
        .replace("{owner}", owner)
        .replace("{repo}", repoName);
}

// List commits for a repo
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
