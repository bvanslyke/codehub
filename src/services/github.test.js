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

