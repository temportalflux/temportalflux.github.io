
<div style="padding: 10pt; width: 30%; float: left;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/tasks.png'
/>
<center>
Tasks have an experience bar and level number
</center>
</div>

Wow, what a week! Every day here feels like a month and a second all
at once. Senior projects come so far, and so much gets done, within a
week that it can be hard to keep track up. Luckily, that's what we have
task management and hour logs for! ^_^

<div style="padding: 10pt; width: 30%; float: right;">
    <img
        style="width: 100%;"
        src='${PATH_MARKDOWN}/data-roles.png'
    />
    <center>
        Data table for the roles
    </center>
    <img
        style="width: 100%;"
        src='${PATH_MARKDOWN}/data-crossbow.png'
    />
    <center>
        Data table for the crossbow ability
    </center>
</div>

The biggest achievement this week was definitely getting our final
system in. For a long time we have had a task/leveling system in our
backlog, and it was finally time to sit down and put it in. The current
mock up uses a very crude numbering system to tell the players what
level they are at for any given ability. There is a lot to improve
by way of player feedback and rewards, but we wanted to give players
more ways to explore the gameplay and have agency in the game. The task
system is one way we are giving power to the players.

In parallel with the task system came data driven gameplay. I hooked up
various systems (like ability action cooldowns and their effects) to
Unreal Engine's Data and Curve Tables. This allows our designer to
balancing the game faster and from one place (and from google sheets).
Just another tool in the backlog of tools that we have to help our
developers make things even faster!

<div style="padding: 10pt; width: 35%; float: left;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/art-shot.png'
/>
<center>
Adding environment models and lighting
</center>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/birdseye.png'
/>
<center>
Birds eye view of the level
</center>
</div>

We've got a data table for the roles and their abilities. Roles like
the main player character the DangerAct who has various actions
associated with Movement, Primary, Secondary, Special, and Ultimate
action tiers. They also have an Antagonist Ultimate ability, which is
carried over into the Greed state when they grab the gem, but isn't
used when they are just a regular player. Each ability also has its
own CurveTable, which allows our designer to drive things like
cooldowns, damage, and rate of fire right from data.

Last week our artist was cranking out environment assets so we can
start fleshing out the world. This week we sat down and got those
implemented in engine and in the world. After a bit of iteration on
these assets, we managed to get the world feeling and looking nice!
Its really exciting seeing our disciplines overlap in these ways to
make something awesome. We have updated assets for destructibles,
walls, floors, ceilings, chandeliers, stairs, railings, and a couple
others that aren't implemented yet.

# Tool Updates

<div style="padding: 10pt; width: 30%; float: right;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/recorder.png'
/>
<center>
The QARecorder with a VDD/onboarding overview for QA testers
</center>
</div>

Oh yes, I've got another tool's update for you this week! First up:
updates on the QARecorder. This is the tool I made to help my team
run play tests more easily and with more data collection. Recently,
our designer and I have had a hard time explaining the game to every
tester every time they test. This is because there is a lot of things
going on, and its a lot to remember. So while we are working on a better
in-game onboarding system for players, we decided we wanted to at least
give QA testers a crash course in the systems before they play. Our
designer made a VDD google slides presentation which players can browse
through right inside the QARecorder itself! This took a bit of updating
on how I am working with iframes, but it works pretty smoothly!

<div style="padding: 10pt; width: 30%; float: left;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/heatmap.png'
/>
<center>
The first heatmap ever fully recorded from actual player data (31,000 data points)!
</center>
</div>

The other big (read: HUGE) update this week is that YOGURT finally is
testable!! HURRAY!! Ok, but what does "testable" even mean? Well, for
YOGURT, it means we can gather data in a playtesting session, save it
somewhere, and a developer can go into the editor (with some knowledge
of how it works before hand) and load the same data file to see what
they players were up to.

The end goal is that this plugin would just be a framework for recording
and loading compressed data. For now, its still in that proof-of-concept
phase where its specifically doing this for a heatmap of player position
over time. That is what the screenshot nearby shows off. In one
8 minute play session, a player generated 31,000 some data points
(right now, data is recording every tick). That mean that for 2 play
sessions of 4 testers each, we generated 125,000 some data points!
As it stands, the plugin runs through this data very inefficiently,
so loading all the data at once is near impossible - but that's why
its just testable right now. My next task is making that loading
a little more bearable, at least so it doesn't freeze the editor. ;)
Its great to finally be gathering data though! It gives me some real
content to work with, as opposed to me running around for a couple
minutes on my own in an empty world.

# Weekly Team Posts

Artist: Ellie Peak | [Week 9](https://www.artstation.com/artwork/Jl9akn)

Designer: Conor Tully | [Chapter 9: Red Velvet](https://www.conortully.com/blog/chapter-9-red-velvet?fbclid=IwAR3ESO4ShVHbdMe4VrwTr2sm7S4_s3QncyqNhZ28cvumqcIG6-N8mNeHfws)

