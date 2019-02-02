
<div style="padding: 10pt; width: 100%;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/conceptArt.png'
/>
<center>
Concept art made by Jocelyn Bedell
</center>
</div>

<div style="padding: 10pt; width: 50%; float: right;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/golumDesign.jpg'
/>
<center>
Idea generation and planning of Golum AI
</center>
</div>

# Golum

Over the past week I have been working on some of the ideas behind
why the hostile creatures are doing what they are doing, what that is,
and implementing some rudimentary behaviors. The largest portion of this
was coming up with some basic concepts for the Golum, the simplest of
our creatures to wander the world. Whiteboarding at its finest here.

Semi-brief breakdown of the scrawlings of a mad-man on a whiteboard;
If you'll direct your attention to the concept art of the golum and
the sneagle, you may notice that the golum doesn't really have
joints to connect its parts. If you didn't notice, look now and see.
The artists want to cut where we can on hard animation as it is time
consume, time better spent else where. So the body parts are connected
more by particles effects, which means they can move separately to
some extent. This gives us (read: me) room to be creative with these
creatures. At least in combat, this leads to the idea of floating parts
and [launching fists](https://youtu.be/vMaXSuWXmzs?t=35). Additionally,
we could mess with the players by scatting parts of golums around a
level and letting them come to life when the player gets near.
Golums are designed to be the dumbest/simplest AI. They are merely
guards who attack on sight and can search for the player, not unlike
Assassin's Creed: Odyssey's guards. They also enjoy a good nap from time
to time.

# Sneagle Wiggles

<div style="padding: 10pt; width: 50%; float: right;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/wiggleFunc.gif'
/>
<center>
Test of a function to simulate snake wiggles
</center>
</div>

The team is also trying to limit the workload on animations, so I
looked into the feasibility of procedural snake animation using
sinusoidal waves aka the wiggle function. If timed correctly,
this would simulate the
[natural movement of snakes](https://en.wikipedia.org/wiki/Snake#Locomotion)
where the input correlated to the distance traveled per tick.
This is also similar to [WoW's Cloud Serpents](https://www.youtube.com/watch?v=Xu4k7OHp0p8). Not
much more of this as of yet, as there is no skeleton to mess with yet.
I will add an addendum here when there is more to show if its before
the end of the sprint, otherwise stay tuned for next week's post.

# Refactor

As we continue adding more content, as developers we are aware that
the current state of the project is quite spaghetti. It is not uncommon
to find legacy code (even just a couple months old) that looks like the
screenshots nearby. Part of this week's tasks have been refactoring
the necessary code so its more readable and maintainable. This continues
to be an ongoing cost per sprint.

<img style="width: 100%;" src='${PATH_MARKDOWN}/spaghetti1.png' />
<img style="width: 100%;" src='${PATH_MARKDOWN}/spaghetti2.png' />
