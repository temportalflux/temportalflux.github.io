
A bit of a more update-y post today. I'll be covering wrap up from last
weeks sprint, and the things I've been working on this sprint thus far.
Before we get to that though, the team and game passed Greenlight this
past week, so now its on to Alpha, Beta, and Release!

# Scrum Meetings

This past Tuesday a majority of the team go together and did a sprint
retrospective on the past couple weeks, primarily the past sprint.
A lot of what we talked about regarded the increase in communication
within the team, actually starting on content, and doing group work
sessions. This was a valuable meeting, and I'm looking forward to more.
The sprint retro dedicated a time and space for folks on the team to
not feel guilty about bringing up workflow stuff or things they got
blocked on, and a bit of a space where we could just reflect
on the week.

After sprint retrospective, we also did our sprint planning for the
current sprint. We planned out a rough outline of what everyone's tasks
would be, as well as a couple meetings we wanted to do to solidify
workflow/pipeline and concepts. Of major importance for me was the
Creatures Features & Pipeline meeting, and a short work session to
show designers a tool I made the previous day to help with
level building.

# Creature Planning

One of the roadblocks I ran into last sprint was not knowing when
I get certain assets or when we needed to talk about creature behaviors
and attacks. So after bringing that up in the retrospective, the
team decided to have a meeting about the pipeline for creating
creatures. This also provides one way for the team to manage scope
regarding creatures, after all, all mechanics/features must be
prototyped by Alpha. We started with the current art pipeline for
creatures, and expanded into my area. Part of this expansion included
what the art department needs to be successful, and also what I need
from the team to be able to creature creatures that meet the intent
of the team. Figure 1 is our whiteboard flow of the pipeline. Its very
organic and messy. Due to its organic nature, we decided we also needed
a cleaned up version for documentation which is more easily readable.
A large part of this doc is points where departments interact, and when
things get tested. These points occur at the beginning, where the team
comes up with concepts and fleshes out those concepts. Then art and
engine kind of split away from each other as we prototype some stuff.
That is, until art has a model and rig that can be tested in engine.
Meanwhile, I am testing out possible behaviors and AI. Then, we come
together more as we test out behaviors and art, both in development
and at QA.

<div style="padding: 10pt; width: 100%;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/creaturePipeline1.jpg'
/>
<center>
Fig 1. Whiteboard pipeline (overly organic & hard to read)
</center>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/creaturePipeline2.png'
/>
<center>
Fig 2. Cleaned up creature pipeline (for docs)
</center>
</div>

Right after we had the pipeline meeting, we talked about the next two
creatures to be implemented/updated. I've already started work on the
Golum, and we want that to be in our next QA if possible. This meant
that we had to settle on a style of behavior, and what its attack(s)
are. We came to a conclusion of a more ranged enemy for the Golum,
with a short range knockback and longer range rocket fist thing.
Golums and Urchins are both prevalent in the underground ruins, so
we decided that Urchins would be melee styled, to complement the Golums.
Currently the urchins are organic, and suicidal at best. This didn't
fit well, nor is it believable (unless you count Minecraft Creepers).
I challenged us to come up with something which better fit our narrative
and is believable. It took a bit of debate, but we settled on a
rock (inorganic) with spikes that protrude and then have it scuttle
away. This also allows for the underground theme to be more cohesive.
Golums are already planned to be scatted on the ground when they are
idle/sleeping, and rocks which come to life also fit the same theme.

<center>
<div style="padding: 10pt; width: 80%;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/creatureFeature.jpg'
/>
Fig 3. Whiteboard notes on creature content planning
</div>
</center>

# Golum Updates

One of the things we decided on during the creature feature meeting was
that Golum meshes would be attached in-engine, rather than skinned to
bones during rigging and modelling. This allows me to detach body parts
and give them physics in-engine. Important features for things
like the sleeping Golums (whose body parts are scattered on the ground)
or the rocket fist which will launch the arm of the Golum at the player.
While the art department got to work on the model and rig, I decided to
confirm that I could easily do this in engine. That led to the creation
of Block Golum as seen in Figure 4.

<center>
<div style="padding: 10pt; width: 50%;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/golumMesh.png'
/>
Fig 4. Prototyping golum mesh attachment using the default UE4 Mannequin
</div>
</center>

One of our goals for the week was to get Golums to a state which they
could be put through QA either Monday or Thursday of the upcoming week
(end of this sprint or at the start of the next sprint respectively).
That meant that I really needed to get the Golum to be aware of, and
attack, the player. So I got a mock up of the Golum following the
nearest target (Figure 5). While I don't have images of it,
the Golums also now have the ability to knock the target (player)
back when it is too close. Next up is getting that rocketfist working.

<center>
<div style="padding: 10pt; width: 50%;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/lineofsight.gif'
/>
Fig 5. Line of sight for Golum to see player/target (red smoke = can see you)
</div>
</center>

I discovered that Golums floated in the air during pathfinding, and then
discovered that I should really be using the CharacterMovement component,
which only works on Character actors in UE4. Also, the entities used to
all be Character actors, but because they didn't all use the skeletal
mesh, were refactored to regular old pawns. Whoops. So I had to take
some time this week refactoring the entities again to go back to using
Character as a parent class.

That's all for this post. Lots of other work going on, like dynamic
mesh actor generation as a tool for level design, and some awesome
ideas/tech being prepped for other creatures, but I'll save those
for a blog post another day.
