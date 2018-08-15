import {FaAt, FaGithub, FaLinkedin, FaMapMarker, FaTwitter} from "react-icons/fa/index";

export const SETTINGS = {

    author: {
        name: 'Dustin Yost',
        logo: '/icon.png',
        avatar: '/bio-photo.png',

        bio: 'An explorer of digital time and space',

        email: 'dustin.yost.t@gmail.com',
        contact: [
            {
                icon: FaMapMarker,
                text: 'Burlington, VT',
                link: 'https://www.google.com/maps/place/Burlington,+VT/',
            },
            {
                icon: FaAt,
                text: 'Email',
                link: 'mailto:dustin.yost.t@gmail.com',
            },
            {
                icon: FaGithub,
                text: 'Github (temportalflux)',
                link: 'https://github.com/temportalflux'
            },
            {
                icon: FaLinkedin,
                text: 'LinkedIn (dustin-yost)',
                link: 'https://www.linkedin.com/in/dustin-yost/'
            },
            {
                icon: FaTwitter,
                text: 'Twitter (temportalflux)',
                link: 'https://twitter/temportalflux'
            },
        ]
    },

    url: 'https://temportalflux.github.io',
    baseurl: '',
    repository: 'temportalflux/temportalflux.github.io',
    teaser: null,
    twitter: {
        username: 'temportalflux'
    },
    github: {
        username: 'temportalflux'
    },
    og_image: null,
    social: {
        type: 'Person',
        name: 'Dustin Yost',
        links: [
            'https://github.com/temportalflux',
            'https://www.linkedin.com/in/dustin-yost'
        ]
    },

    markdown: 'kramdown',
    permalink: '/posts/:year/:month/:day/:title',
    timezone: null,
    include: [
        '_pages'
    ],
    defaults: [
        {
            scope: {
                path: '',
                type: 'posts'
            },
            values: {
                layout: 'single',
                author_profile: true,
                read_time: false,
                comments: false,
                share: true,
                related: true
            }
        },
        {
            scope: {
                path: '',
                type: 'projects'
            },
            values: {
                layout: 'single',
                author_profile: true,
                share: false
            }
        }
    ],
    collections: {
        projects: {
            output: true,
            permalink: '/:collection/:path/'
        }
    }
};
