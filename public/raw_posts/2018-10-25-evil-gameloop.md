
# Preface

Hey, fun fact! Our team (Ouroboros Creations) found that our team name
was very long, hard to pronounce, and is just a mouthful. So we decided
to do some rebranding. One our our initial names that we had joked
around with actually really fits the fun we have in making games, so we
decided to throw back to it. Without further ado, I introduce you to,
The League of Evil!

<center>
<img
    style="width: 50%;"
    src='https://i.imgur.com/n18uPug.png'
/>
</center>

# Overview

A lot of my time this week has been devoted to responding to
player feedback (from QA & class) and helping our artist integrate
art assets. The biggest issues we found with our project last week
were how players become the antagonist (Greed) and the winstate. We
have had a solid game loop, but it definitely needed some tweaking.

<div style="padding: 10pt; width: 30%; float: right;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/anim-greed-idle.gif'
/>
<center>
Greed (temporary) idle
</center>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/anim-greed-run.gif'
/>
<center>
Greed run
</center>
</div>

# Greed Trigger

Our first iteration/conceptualization of becoming Greed was the
last player to hit them became Greed. This resulted in a clear divide
between those who could snipe/hit the most and those who may not be as
skilled in the game (some of our own team members couldn't even achieve
it). Then, we iterated and tried just spawning a collectible trigger
in the world which allowed players to collect it to become Greed. The
spawning of this was randomized between set locations, and we found
that players camped at those locations and just waited for other players
to destroy Greed. For our most recent iteration, we wanted the best of
both worlds. We want players to feel rewarded for getting that last hit,
but also allow other players to still swoop in and steal the trigger
if possible. Using these goals, we decided to have the gem fall off of
the player who was just Greed, and launch towards the player who hit
Greed last. We have also added a gameplay effect (using GAS)
which freeze the former Greed player so they cant grab the trigger
again right away. We have plans to add more player feedback to this,
but for now the functionality works. I'm hoping we can get some more
critique on this so we can make the player experience feel even better.
If all goes well, we can add more player feedback to this mechanic.
(no gif for this, sorry. Please enjoy the gifs of our lovely animations
though.)

One of the metrics we have for testing if becoming Greed is an
achievable goal for all players is actually one of our peers in our
capstone class (name omitted). This person has had issues
every week becoming Greed, so we have a running joke of "if [Alex] can
become Greed, then we have done good" (actual name replaced by fake
gender neutral-ish name).

# Money Bags

<div style="padding: 10pt; width: 30%; float: right;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/grabthrow.gif'
/>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/grabthrow2.gif'
/>
<center>
Grab & Throw abilities
</center>
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/moneyBags.gif'
/>
<center>
Turn in your $$$ Bags
</center>
</div>

We have also spent a significant portion of this week focusing on
getting the win/end state to feel good. Conceptually, we knew we wanted
to have players collect money/chips from the world. Formerly, this was
direct from destroying destructibles in the casino. This meant that
the player who was Greed was the only one able to gather points though.
With becoming Greed feeling unbalanced, we decided to approach this
experience of gathering chips from a different angle.

Now, each destructible drops some chip/money bags.
Anyone can collect these, so while Greed has a clear advantage
being right there and also having a large area around them to collect
from, players could also swoop in and collect money bags right out from
under Greed. This gives Greed incentive to keep players away, and
encourages players to run up to Greed. These money bags then have to be
turned into a collection area in the world. Conceptually this is the
counter at a casino where you turn in your chips for actual $$$.
Any player can do this, even Greed.
We also wanted to have more interaction between Greed and players,
so we gave players a snatch ability, which allows them to steal
money bags from Greed if they are close enough. This gives incentive
for Greed to turn in their bags, even though any bags they have when
they are destroyed as Greed carry over to their normal player state.

I also spent some time updating some of the abilities players have.
One of these abilities - the grab ability - was just a longer reach
smash last week (you could destroy things at a longer distance).
This week, I was able to turn it into a fully fledged grab and throw
ability, where players can pick up destructibles and throw them around
the world. While it didn't get in for this build, this ability has
other consequences as well. If Greed can pick up stuff, it would also
make sense that it would be able to pick up players and chuck them
across the map. This ability would also allow Greed to steal money
bags from players, which gives Greed more incentive to interact with
players.

This ability of moving players without consent has some wider reaching
player experience implications. A large portion of our testers
(read: developers) at Champlain are impacted by motion sickness. When
this part of the ability is implemented, we will have to consider
how we can mitigate/prevent motion sickness when players are picked
up and chucked across the map without reducing how powerful it makes
Greed feel.

# Winstate

<div style="padding: 10pt; width: 30%; float: left;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/winstate.gif'
/>
<center>
Prototype winstate showing off the destruction you have done
</center>
</div>

Finally, in conjunction with the money bags, we needed to tweak our
winstate. Formerly, the winstate was triggered when every destructible
in the casino was destroyed. This often took too long (the play
area/arena is very large). One of our testers
(again, read: peer developer) asked us why the winstate isn't just
get to some quantity of points. The team loved this idea and we decided,
last minute in the sprint, to try to prototype this. Luckily, most of
the backend for this particular calculation was already in place.
Now players are able to trigger the winstate by turning in their bags.
First person to say, $10,000 wins. We are hoping this plays well, and
further encourages playesr to think critically about when to turn
in their money bags. Not only are you trying to be the first to
$10,000 (or some other amount due to balancing later this semester),
but they must also think about Greed potentially stealing their bags.
If you are currently Greed, thinking also about players stealing your
cash money bags vs how many you can collect as Greed in a short amount
of time.

Later down the road, we also have the goal of forcing players to see
the havoc they've wrecked as Greed. Greed is not a nice lovely thing.
Like the other seven deadly sins in Christianity, and its synonyms in
other religions, it is nasty and gross and not healthy. We recognize
as a team these implications and want to show players the crap they've
caused their friends and how it has destroyed the area they are in.
Come to think of it, this would be a great blog post for next week ;),
stay tuned!

# Weekly Team Posts

If you haven't been reading the posts from some of my co-developers on
this game, I highly encourage you to do so!! I love reading over these
and seeing the perspectives my team has on each week.

Artist: Ellie Peak | [Week 8](https://www.artstation.com/artwork/zAAPqd)

Designer: Conor Tully | [Chapter 8 - Shooting for the Moon and Hitting Mars](https://www.conortully.com/blog/chapter-8-shooting-for-the-moon-and-hitting-mars)
