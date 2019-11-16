import React from "react";
import {Header} from "semantic-ui-react";
import Page from "./page";
import PROJECTS from "./projects";
import POSTS from "./posts";
import FEEDS from "./podcasts";

export const ROUTES = [
    {
        path: '/',
        component: Page.Main,
        exact: true,
        headerItem: {content: 'Home', name: 'home'}
    },
    {
        path: '/about',
        component: Page.About,
        headerItem: {content: 'About', name: 'about'}
    },
    {
        path: '/projects',
        component: Page.Projects,
        exact: true,
        headerItem: {content: 'All Projects', name: 'projects'}
    },
    {
        path: '/blog/:category?', link: '/blog/',
        component: Page.Blog,
        headerItem: {content: 'Blog', name: 'blog'}
    },
    {
        path: '/resume',
        component: Page.Resume,
        headerItem: {content: 'Resume', name: 'Resume'}
    },
    {
        path: '/podcasts',
        component: Page.PodcastList,
        exact: true,
        headerItem: {content: 'Podcasts', name: 'Podcasts'}
    },
    /* REEL DISABLED
    {
        path: '/reel',
        component: Page.Reel,
        headerItem: {content: 'Reel', name: 'reel'}
    },
    //*/
    ...(PROJECTS.map((info) => {
        return {
            path: `/projects/${info.markdown}`,
            render: () => <Page.Project {...info} />,
        };
    })),
    ...(POSTS.map((info) => {
        return {
            path: `/posts/${info.markdown}`,
            render: () => <Page.Post {...info} />,
        };
    })),
    ...(FEEDS.filter((info) => info.path !== undefined).map((info) => {
        return {
            path: `/podcasts/${info.path}`,
            exact: true,
            render: () => <Page.Podcast {...info} />,
        };
    })),
    ...(FEEDS.map((info) => {
        return {
            path: `/podcasts/${info.xml}`,
            exact: true,
            render: () => <Page.PodcastFeed {...info} />,
        };
    })),
    {
        render: () => (
            <Page>
                <Header as={'h1'} content={'404 Page not found'} />
            </Page>
        ),
    }
];

export const ROUTE_PATHS = ROUTES.reduce((paths, route) => {
    paths[route.path] = route;
    return paths;
}, {});

export const DEFAULT_ROUTE = ROUTES[0];
