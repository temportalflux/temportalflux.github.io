
This week has been a total blur, quite stressful at times, but also
an outstanding amount of fun and excitement. There is so much that
has happened, and so much left to do, lets see if I can remember it all.

On Thursday (Sprint day 2), the team gathered to layout the remaining
roadmap to alpha. We've only got another 2 weeks left on this, and
we quickly discovered that there is still a lot left to do.
One big glaring issue was that we still had not pinned down behaviors
for Sneagles, Rays, or any of the bosses we want to put in.

On that note, we desperately needed to get together and nail down
remaining creature details. So Friday portions of the team got
together and talked about the remaining creatures and their behaviors/
combat abilities. We got all this laid out, and now it sits in the
backlog till we can commit to them in the coming sprints. Also on Friday,
I got together with one of our level designers so we could tweak the
Golem and Urchin behaviors to meet the intent of the level
(they were designed with a bit more complexity than was needed because
we hadn't yet nailed down the level design). I also met up with
our programmer focusing on combat so we could take a look at integrating
his combat systems with the new creatures. Unfortunately, when we sat
down to try to integrate, we discovered that the current system was
prototyped/hard-coded into one of the attacks. So we spent the rest of
the time working on refactoring that system so it would work across
both melee and ranged attacks and with the various ways we instigate
those attacks. The crunch started to set in around now, because the
team planned on getting the Golems and Urchins to QA on Saturday,
and it looked like this was less and less likely, especially considering
that I had also been drafted to help with a ski trip that went from
4pm to 11pm Friday night.

Thankfully though, that ski trip was amazing and re-energized me for
the Saturday to come. And then I was also brought on to help with
Open House here at the college, speaking on behalf of the
Game Programming major and my experiences alongside other students
from their respective majors. That took the entire morning of Saturday,
but come 1pm, I was absolutely determined to get everything working
and in on time. Golems and Urchins were due in a build for
Quality Assurance testing by 5-5:30pm (5:30pm is when the testing
session actually began). We lots of determination, help from
the combat programmer, and a bit of luck, I was able to get everything
in on time. <i>Just</i> in time. By 5:20pm I had Golem attacks
(both Rocket Fist and their melee knockback attack) integrated with
the combat system, along with the Urchins procedurally animating
their spikes, and dealing knockback and damage when the Urchins attacked.
This meant that each of these combat attacks were parry/blockable,
per the wonderful system that our combat programmer made. Finally,
all of this was packaged into a full on build of the game, and pushed
just in time for QA. I wish it hadn't of cut that close, but sometimes
thats the reality of development.

Finally, after build got pushed, I joined other team members who were
in a different lab, where the artist focusing on models and rigs/animations
and I collaborated on how we could get the Golem model/rig into Unreal,
and also dynamically attach its mesh to the rig in engine.
Doing this dynamically in engine is important in this case,
because one of the goals for the Golem is for it to fall apart/drop
to the ground when it is sleeping, and so that I can make its arm
fly off towards the player. To that end, I created a rough prototype/
primer of what I dubbed the Dynamic Skeletal/Sub/Socket Mesh
attachment system. This system mirrors the architecture of a skeleton
or rig, and allows me to easily socket meshes to a rig by creating a
few assets and calling a function.
