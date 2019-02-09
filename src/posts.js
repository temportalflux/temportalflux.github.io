import shortid from 'shortid';

const POSTS = [
    {
        title: "Stray: Golums and Snakes and Spaghetti - Oh My",
        date: '2019-02-02',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'Stray',
            // Field
            'AI',
            // Tools
            'Unreal Engine',
        ],
        description: '',
        teaser: '/raw_projects/12_stray/images/justicePorkGames.png',
        markdown: '2019-02-02-stray-golums-snakes-spaghetti',
    },
    {
        title: "UtilityAI: Exploration and Planning",
        date: '2019-01-26',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'UtilityAI',
            // Field
            'AI',
            // Tools
            'Unreal Engine',
        ],
        description: '',
        teaser: '/raw_posts/2019-01-26-utility-ai-exploration-and-planning/blackboard.png',
        markdown: '2019-01-26-utility-ai-exploration-and-planning',
    },
    {
        title: "Stray: Meetings and Creatures Galore",
        date: '2019-01-25',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'Stray',
            // Field
            'AI',
            // Tools
            'Unreal Engine',
        ],
        description: '',
        teaser: '/raw_projects/12_stray/images/justicePorkGames.png',
        markdown: '2019-01-25-stray-meetings-and-creatures-galore',
    },
    {
        title: "Stray: A New Path",
        date: '2019-01-17',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'Stray',
            // Field
            // Tools
            'Unreal Engine',
        ],
        description: '',
        teaser: '/raw_projects/12_stray/images/justicePorkGames.png',
        markdown: '2019-01-17-stray-a-new-path',
    },
    {
        title: "Capital Vice: A Postmortem",
        date: '2018-12-03',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            // Field
            // Tools
        ],
        description: '',
        teaser: '/raw_posts/2018-12-03-capital-vice-a-postmortem/logo.png',
        markdown: '2018-12-03-capital-vice-a-postmortem',
    },
    {
        title: "Culture, Crunch, and Capstone",
        date: '2018-11-08',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            // Field
            'Crunch',
            // Tools
        ],
        description: '',
        teaser: 'https://i.imgur.com/n18uPug.png',
        markdown: '2018-11-08-culture-crunch-capstone',
        highlight: true,
    },
    {
        title: "The League of Evil: Final Systems & YOGURT Update",
        date: '2018-11-01',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            'YOGURT',
            // Field
            'GUR',
            // Tools
            'Unreal Engine',
        ],
        description: 'Refinding and refining the fun in our game',
        teaser: 'https://i.imgur.com/n18uPug.png',
        markdown: '2018-11-01-leagueofevil-finalsystems',
        highlight: true,
    },
    {
        title: "The League of Evil: Refining the fun in our game loop",
        date: '2018-10-25',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            // Field
            'Gameplay',
            // Tools
            'Unreal Engine',
        ],
        description: 'Refinding and refining the fun in our game',
        teaser: 'https://i.imgur.com/n18uPug.png',
        markdown: '2018-10-25-evil-gameloop',
        highlight: true,
    },
    {
        title: "Gameplay Ability Prototyping",
        date: '2018-10-16',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            // Field
            'Gameplay',
            // Tools
            'Unreal Engine',
        ],
        description: 'Making the first pass on player abilities',
        teaser: 'https://i.gyazo.com/013c017518fbe8d1ab766e0205961235.png',
        markdown: '2018-10-16-ouroboros-gameplay',
    },
    {
        title: "YOGURT: Making the mesh",
        date: '2018-10-14',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'YOGURT',
            // Field
            'GUR',
            // Tools
            'Unreal Engine',
        ],
        description: 'Procedural mesh and UV map generation',
        teaser: 'http://3.bp.blogspot.com/-h4bD0ZSDLlc/VZXvOK2kFQI/AAAAAAADH_4/K-aV-q_MI70/s1600/IMG_8055-001.jpg',
        markdown: '2018-10-14-yogurt-making-the-mesh',
    },
    {
        title: "Read The Docs",
        date: '2018-10-10',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            // Field
            // Tools
            'Unreal Engine',
        ],
        description: 'Improving our docs to make more cool stuff',
        teaser: 'https://i.gyazo.com/013c017518fbe8d1ab766e0205961235.png',
        markdown: '2018-10-10-ouroboros-readthedocs',
    },
    {
        title: "Tool Time",
        date: '2018-10-04',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            'YOGURT',
            'QA-Recorder',
            // Field
            'GUR',
            // Tools
            'Unreal Engine',
        ],
        description: 'A full run down of the QARecorder, Gameplay Ability System, and plans for an Unreal Engine tool',
        teaser: 'https://i.gyazo.com/013c017518fbe8d1ab766e0205961235.png',
        markdown: '2018-10-04-ouroboros-tools',
        highlight: true,
    },
    {
        title: "Systems & QA",
        date: '2018-09-25',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            'QA-Recorder',
            'YOGURT',
            // Field
            'GUR',
            // Tools
            'Unreal Engine',
        ],
        description: 'Integrating new systems and QA fun',
        teaser: 'https://i.gyazo.com/013c017518fbe8d1ab766e0205961235.png',
        markdown: '2018-09-25-ouroboros-qa',
    },
    {
        title: "Documents Galore",
        date: '2018-09-19',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            'QA-Recorder',
            'YOGURT',
            // Field
            'GUR',
            // Tools
            'Unreal Engine',
        ],
        description: '',
        teaser: 'https://i.gyazo.com/013c017518fbe8d1ab766e0205961235.png',
        markdown: '2018-09-19-ouroboros-documents',
    },
    {
        title: "Eating Prototypes for Breakfast",
        date: '2018-09-12',
        language: 'C++',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            // Field
            // Tools
            'Unreal Engine',
        ],
        description: 'Rapid Prototyping and Concept Development',
        teaser: 'https://i.gyazo.com/013c017518fbe8d1ab766e0205961235.png',
        markdown: '2018-09-12-ouroboros-prototypes',
    },
    {
        title: "The League of Evil: Finding your head",
        date: '2018-09-03',
        language: 'n/a',
        categories: [
            // Location
            'Champlain',
            // Project
            'Capstone',
            'The League of Evil',
            // Field
            // Tools
            'Unity',
        ],
        description: 'Capstone begins: Planning, Concepting, and Prototyping',
        teaser: 'https://i.gyazo.com/013c017518fbe8d1ab766e0205961235.png',
        markdown: '2018-09-03-ouroboros-finding-your-head',
    },
    {
        title: 'Disrupting Summer at Disruptor Beam',
        date: '2018-08-16',
        description: 'Looking back at my time at Disruptor Beam',
        categories: [
            // Location
            'Disruptor Beam',
            // Project
            'Internship',
            // Field
            'LiveOps',
            // Tools
            'Unity',
        ],
        markdown: '2018-08-16-disruptor-beam',
        teaser: '/raw_posts/2018-08-16-disruptor-beam/1024x1024_Enterprise-D-Stars.png',
        highlight: true,
    },
    {
        title: "Skyrates: A Beginning",
        date: '2018-01-31',
        language: "C#",
        categories: [
            // Location
            'Champlain',
            // Project
            'Production',
            'Skyrates',
            // Field
            'Prototyping',
            // Tools
            'Unity',
        ],
        description: "Milestone 1A: Starting our sky-high adventure",
        teaser: '/raw_posts/2018-01-31-skyrates-a-beginning/logo.png',
        markdown: '2018-01-31-skyrates-a-beginning',
    },
    {
        title: "Global Game Jam 2018",
        date: '2018-01-28',
        language: "C#",
        categories: ['Game Jam', 'Unity'],
        description: "First Game Jam: A Recap",
        teaser: '/raw_posts/2018-01-28-global-game-jam/icon.png',
        homepage: 'https://globalgamejam.org/2018/games/hearthold',
        markdown: '2018-01-28-global-game-jam',
    },
    {
        title: "Coordinated Movement",
        date: '2017-12-11',
        language: "C#",
        categories: ['Artificial Intelligence', 'Champlain', 'Unity'],
        description: 'A demo on Coordated Movement and Formations in Unity.',
        teaser: '/raw_posts/2017-12-11-coordinated-movement/circle.png',
        markdown: '2017-12-11-coordinated-movement',

        executable: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-coordinated-movement-executable/Coordinated.Movement.zip',
        repository: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-coordinated-movement-repository/CoordinatedMovement.zip',
    },
    {
        title: "Minecraft: A Throw Back",
        date: '2017-10-10',
        categories: ['Minecraft'],
        teaser: '/raw_posts/2017-10-10-minecraft-a-throw-back/origin.png',
        description: 'The beginnings of programming and game development.',
        markdown: '2017-10-10-minecraft-a-throw-back',
    },
    {
        title: "Ready, Set, Launch",
        date: '2017-09-14',
        categories: ['Misc'],
        description: 'Welcome to launch',
        markdown: '2017-09-14-site-launch',
    },
];

export const POST_HIGHLIGHTS = POSTS.filter(post => post.highlight);
export const CATEGORIES = Array.from(POSTS.reduce((categories, post) => {
    for (let cate of post.categories) categories.add(cate);
    return categories;
}, new Set([]))).sort().map(category => { return { label: category, value: category, id: shortid.generate(), }; });
CATEGORIES.unshift({ label: "None", value: null, id: shortid.generate(), });

export default POSTS;
