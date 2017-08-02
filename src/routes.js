import { ACTION_TYPE as profileAction, route as profileRoute } from "pages/profile/ProfilePage";
import { ACTION_TYPE as gistAction, route as gistRoute } from "pages/gist/GistPage";
import { ACTION_TYPE as repoAction, route as repoRoute } from "pages/repo/RepoPage";

export const routes = {
    [profileAction]: profileRoute,
    [gistAction]: gistRoute,
    [repoAction]: repoRoute
};