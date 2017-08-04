
/*
 * Configuration for redux-first-router. Pages define their own configuration,
 * so here we just collect actions, components, and route config for each page
 * to be provided to our router.
 */

import {
    ACTION_TYPE as profileAction, route as profileRoute, ProfilePageContainer
} from "pages/ProfilePage";

import {
    ACTION_TYPE as gistAction, route as gistRoute, GistPageContainer
} from "pages/GistPage";

import {
    ACTION_TYPE as repoAction, route as repoRoute, RepoPageContainer
} from "pages/RepoPage";

// Maps redux actions to redux-first-router configuration objects.
export const routes = {
    [profileAction]: profileRoute,
    [gistAction]: gistRoute,
    [repoAction]: repoRoute
};

// Maps redux actions to the container component that will be rendered by <App/>
export const containers = {
    [profileAction]: ProfilePageContainer,
    [gistAction]: GistPageContainer,
    [repoAction]: RepoPageContainer
};