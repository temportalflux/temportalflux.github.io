
One of my philosophies as a programmer is designing systems
and gameplay such that designers can easily access it in engine and make
entire features on their own. This leads to more collaboration in engine,
rather than designers coming up with ideas and engineers implementing
everything (or feeling like they have to). This week, however, our designer
has been reworking our level and looking at game balance. So I had the
pleasure of getting into my favorite specialization in
programming: gameplay programming. So using the modular systems
I already have in place to make cool stuff that players will enjoy.
I got to work on the abilities for the different roles in the game -
it has been a nice breather from a lot of the lower-level programming
I've been doing recently, and got my creative juices flowing.

Unfortunately, the abilities aren't much to look at, as they
are in the prototype phase until we can get more art and animation in. So
this blog post will be more informational that showing off.

# Greed Abilities

## Movement - Sprint

### Goal

Greed can sprint for a short distance to help get them away from players.

### Prototype

Yeah, that is all in the prototype. This will inevitably be tweaked later.

## Primary - Smash

<img
    style="width: 30%; float: right; padding: 10pt;"
    src='${PATH_MARKDOWN}/smash.gif'
    />

### Goal

The player can run up to parts of the environment, knowing they
can destroy it, and use the smash ability to deal damage to a group
of objects. This plays an animation and explodes in glory.

### Prototype

When players trigger the ability, no animation is played yet, but
they are able to completely destroy a destructible they are directly
looking at, and deal some damage to everything else around them at
a certain radius.

## Secondary - Bite

<img
    style="width: 30%; float: right; padding: 10pt;"
    src='${PATH_MARKDOWN}/bite.gif'
    />

### Goal

Players can look at objects in the world, and when they press the input button,
the snake on Greed's back lashes out at the object. While the button is held,
the snake holds onto the object. Upon button release, the snake throws the
object in the direction greed is facing. The object will destroy the first
thing in its path, dealing damage in the area. If this hits a player,
the players can be dazed/stunned.

### Prototype

Players can look at an object, and upon pressing the button, AOE damage
is dealt to anything in the immediate vicinity of the thing the player is
looking at.

## Special - Roar & Survey

### Goal

Greed can "roar", causing players in the area to be pushed away from them.
This also automatically happens when players become Greed, as all the
players are going to the same place for the same purpose, so there is often
lots of congestion in the area. On roar, Greed is able to scan the immediate
area for anything they may be able to steal from / destroy.

## Prototype

Right now the ability only pushes everyone back. Eventually we will add
animations and more player feedback to this so its very apparently what has happened.

# Danger Act

## Primary - Crossbow

<img
    style="width: 30%; float: right; padding: 10pt;"
    src='${PATH_MARKDOWN}/crossbow.gif'
    />

### Goal

Players shoot a crossbow bolt (and play an animation).

### Prototype

Yup, the players can shoot a projectile - though there isn't an animation
yet.

## Secondary - Throwing Knives

<img
    style="width: 30%; float: right; padding: 10pt;"
    src='${PATH_MARKDOWN}/throwing-knife.gif'
    />

### Goal

This ability is very similar to the Crossbow, in that its another projectile.
Players will have 3 of these at maximum, and when they throw one,
they will have to go pick it up. These are meant as a secondary resource
and do a different amount of damage compared to the crossbow.

### Prototype

For rapid iteration, we decided to have this one match the crossbow in
function, just with a higher cooldown and damage. Later I will need to
integrate a pick-up mechanic. I had tried a prototype of the mechanic,
but it proved to be to unstable to spend too much time on in the moment.

# Outside of the build

<div style="padding: 10pt; width: 30%; float: left;">
<img style="width: 100%;" src='https://pbs.twimg.com/media/DplUnNiXUAgwcz2.jpg' />
<center>
Q&A Panel with VV and Raven devs.
<a href="https://twitter.com/temportalflux/status/1051965033834565633">tweet</a>
</center>
</div>

Outside of the world that is capstone, Champlain also had our fall
career fair this past week. Among the masses of students and recruiters,
we had a small corner dedicated to the game studio. The lovely folks at
the Career Collaborative (our office for finding internships and jobs)
managed to get folks from Velan Studios, Playstation, and Activision
(Vicarious Visions and Raven Software). It was great to make
connections with some folks who have been in the industry for a while,
and reconnect with a couple alumni who were here just a couple
years ago.

VV and Raven both stuck around after the fair and answered some questions
about industry life and what to expect. It was really a phenomenal panel.
Students asked many questions relating to the culture and daily life
of developers in Activision. I'm not surprised (I was one of such questions).
With the discourse going on in the
[twitter sphere](https://twitter.com/beccahallstedt/status/1051899496383295489)
(linking just one of hundreds of threads) about crunch, job stability,
and unions - I am not surprised students are concerned. All of the devs
on the panel echoed student concerns and elaborated how VV and Raven
are very much focused on the health of the developers. It was helpful for
students, especially seniors, to have that sense that there are studios
who are keeping up with the news and being really transparent about the
daily life of their developers.

# Weekly Team Posts

Artist: Ellie Peak | [Week 6 & 7](https://www.artstation.com/artwork/0XXVYG)

Designer: Conor Tully | [Chapter 7: The Council of Douglas](https://www.conortully.com/blog/chapter-7-the-council-of-douglas)
