import {
    ACTION_TYPE as profileAction, route as profileRoute, ProfilePageContainer
} from "pages/ProfilePage";
import { ACTION_TYPE as gistAction, route as gistRoute } from "pages/GistPage";
import { ACTION_TYPE as repoAction, route as repoRoute } from "pages/RepoPage";

export const routes = {
    [profileAction]: profileRoute,
    [gistAction]: gistRoute,
    [repoAction]: repoRoute
};

export const containers = {
    [profileAction]: ProfilePageContainer,
    [gistAction]: undefined,
    [repoAction]: undefined
};