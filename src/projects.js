
const PROJECTS = [
    {
        title: "Space Pirates in Space",
        date: "2017-01-10",
        teaser: "/images/teaser.png",
        language: "C#",
        markdown: "01_space-pirates-in-space",

        portfolio: false,

        header: '/images/teaser.png',
        description: 'A turn-based strategy demo that pits two space-stranded pirate crews against each other.',
        timeframe: 'January 2017 (3 weeks)',
        team: 'Cody Douglas, Conor Tully, Jennifer Carlin',
        contribution: 'Programmer',
        outcomes: 'Unity. Working in a small team. Pipeline exploration. Turn-based strategy flow structure.',
        executable: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-space_pirates_in_space-executable/executable.zip',
        repository: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-space_pirates_in_space-repository/repository.zip',
    },
    {
        title: "Dreamtime",
        date: "2017-02-10",
        teaser: "/images/teaser.png",
        language: "C#",
        markdown: "02_dreamtime",

        portfolio: true,
        order: 2,

        description: 'A 2D platformer based around the Aboriginal Australian concept \'Dreamtime\'.',
        timeframe: 'February-March 2017 (3 weeks)',
        team: 'Kayla Miskiv, Michelangelo Demo, Jennifer Carlin, Jody Briggs, Cory Smith',
        contribution: 'Lead Programmer',
        outcomes: 'Unity. Production Management skills. Github collaboration. Graphics and Design Pipelines.',
        executable: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-dreamtime-executable/executable.zip',
        repository: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-dreamtime-repository/repository.zip',
    },
    {
        title: "Bug Hunt",
        date: "2017-03-15",
        teaser: "/images/menu.png",
        language: "C#",
        markdown: "03_bug-hunt",

        portfolio: false,
        order: 3,

        description: 'A driving game which frames the player as an apocalypse survivor on the run from invading aliens. The player uses a Wiimote based gun and a steering wheel to drive themselves away from danger.',
        timeframe: 'March-May 2017 (6 weeks)',
        team: 'Cody Douglas, Conor Tully, Jacob Ettinger, Michelangelo Demo, Jennifer Carlin, Michael Andrews, Cory Smith',
        contribution: 'Lead Programmer',
        outcomes: 'Unity. Collaboration with a large team. Git branch management. Modular script design.',
        executable: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-bug_hunt-executable/executable.zip',
        repository: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-bug_hunt-repository/repository.zip',
    },
    {
        title: "Asteroids",
        date: "2017-08-06",
        language: "C#",
        markdown: "04_asteroids",

        description: 'A demo in random generation an navigation in 3D space',
        outcomes: '3D Space Physics. Random generation. Effects.',
    },
    {
        title: "SensorConnect",
        date: "2017-05-21",
        teaser: "/images/teaser.png",
        language: "C++, JavaScript",
        markdown: "05_sensorconnect",

        portfolio: true,
        order: 6,

        description: 'The main PC software for the sensors developed by LORD Corp.',
        timeframe: 'May-August 2017 (12 weeks)',
        contribution: 'Programming Intern',
        outcomes: 'Production team experience. Releasing software. Alternative input. Handling large quantities of data.',
        executable: 'http://www.microstrain.com/software/sensorconnect',
    },
    {
        title: 'Sensor Expo Demo',
        date: "2017-07-15",
        teaser: '/images/teaser.png',
        language: "Unity, C#",
        markdown: "06_sensordemo",

        portfolio: false,

        header: '/images/teaser.png',
        description: 'A demonstration of using wireless sensors in Unity',
        timeframe: 'July-August 2017',
        contribution: 'Programming Intern',
        outcomes: 'Unity interaction with unsupported input types. Responsive simulation effects with user input.',

    },
    {
        title: "Skyrates",
        date: "2018-05-23",
        teaser: "/images/teaser.png",
        language: "C#",
        markdown: "07_skyrates",

        portfolio: true,
        order: 8,

        twitter: 'https://twitter.com/LeglessSheep',
        timeframe: 'February-May 2018 (13 weeks)',
        team: 'Zynab Makki. Ellie Peak. Jennifer Carlin. McKenzie Shea. Joshua Greaves. Thomas Ray. Matt Dismuke. Summer Softleigh.',
        contribution: 'Lead Programmer',
        outcomes: 'Unity. Production Management skills. Github with a medium sized team. AI pipeline & behaviors. Optimizations. Networking. Scope management. Med-sized group communication.',
        executable: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-skyrates-executable/Skyrates-0.3.3.zip',
        repository: 'https://github.com/temportalflux/temportalflux.github.io/releases/download/download-skyrates-repository/Skyrates.zip',
    },
    {
        title: "Cretins",
        date: "2017-05-23",
        language: "C#",
        markdown: "08_cretins",

        description: 'A technical demontration of a theoretical multiplayer networked Pokemon game.',
        timeframe: 'October-December 2017 (9 weeks)',
        team: 'Jake Ruth. Chris Brennan.',
        contribution: 'Programmer',
        outcomes: 'Small team. Networked demo. Async and synchronous networking. Unity tilemaps.',

    },
    {
        title: "Gameboard Demo",
        date: "2017-05-23",
        language: "C++",
        markdown: "09_goodfungames",

        description: 'A technical demo on digital gameboards',
        timeframe: 'Summer 2017',
        contribution: 'Programmer',
        outcomes: 'Unreal Engine 4. AI. State-driven gameplay.',

    },
    {
        title: "Capital Vice",
        date: "2018-11-20",
        teaser: "/images/teaser.png",
        language: "C#",
        markdown: "10_capitalvice",

        portfolio: true,
        order: 10,

        timeframe: 'September-November 2018 (12 weeks)',
        team: 'Cody Douglas. Ellie Peak. Conor Tully.',
        contribution: 'Programmer',
        outcomes: 'Unreal Engine 4. Networking. Gameplay Programming. Scope management. Quality Assurance. Games User Research.',
        executable: '',
        repository: '',
    },
    {
        title: "YOGURT",
        date: "2018-12-14",
        teaser: "/images/teaser.png",
        language: "C++",
        markdown: "11_yogurt",

        portfolio: true,
        order: 12,

        timeframe: 'September-December 2018 (15 weeks)',
        team: '',
        contribution: 'Programmer',
        outcomes: 'Unreal Engine 4 & Plugins. Tool Development. Open Source. Games User Research.',
        executable: '',
        repository: '',
    },
    {
        title: "Stray",
        date: "2019-01-14",
        teaser: "/images/teaser.png",
        language: "C++",
        markdown: "12_stray",

        portfolio: true,
        order: 11,

        timeframe: 'September 2018-May 2019 (30 weeks)',
        team: '',
        contribution: 'Programmer',
        outcomes: 'Unreal Engine 4 & Plugins. Tool Development. Games User Research.',
        executable: '',
        repository: '',
    },
];

export default PROJECTS;
