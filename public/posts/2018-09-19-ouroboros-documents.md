
<style>
.ouroborosDocsPrototypeFlow {
    transition: transform .2s; /* Animation */
    margin: 0 auto;
}

.ouroborosDocsPrototypeFlow:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>

# Recap

<div align="right" style="width: 25%; padding: 5pt; float: left;">
	<img class='ouroborosDocsPrototypeFlow' style="width: 100%;" src='/posts/2018-09-19-ouroboros-documents/prototype_flow.png'/>
	Sprint 1 and 2 prototype cuts
</div>

While it doesn't feel like the team has gotten anything done, we have actually amde significant progress towards active development. Part of our Capstone is getting past the concept phase, which requires 3 prototypes. We finished two of the three prototypes last week (FloridaMan and Chaos Coven in Unity). This week, the team decided we wanted to do a prototype Unreal Engine 4. After some further conceptualization, we re-imagined Chaos Coven as Casino Chaos, where players are pit against each other in a 3v1. One person plays a character possessed by Greed, while the others' goal is to stop Greed from taking over. As a player, you gain points by destroying or collecting things as Greed. The person playing the antagonist (Greed) has health, and whichever player takes out the last bit of the Greed's health, becomes Greed with a full health bar. True [Crawl](http://www.powerhoof.com/crawl/) fashion, with a twist!

# Sprint 3 - Prototypes & Docs

## Documents

Since this is our third and final prototype, the team decided now would be a good time to start on docs. As the programmer on the team, one of my responsibilities is the Technical Design and Risk Assessment of the game. This includes the platform the game will be built for (Windows presently), the tools we are using, and the systems that will need to be in place to support the mechanics. Each of these also needs to have their risk evaluated. This risk could have to do with how much or how well the team knows a specific topic, it could be how difficult it is to work with it, or even how difficult or how much time it will take to complete a system. The Tech.Doc. is still in its early stages, but is valuable as it helps the team and our stackholders understand why we are accomplishing certain tasks (like tackling Networking or the Gameplay Ability System) earlier, or why the team makes certain decisions (like what tasks we prioritise or why we dont use a specific software).

<img style="width: 50%; float: right; padding: 10pt;" src='/posts/2018-09-19-ouroboros-documents/techdoc.gif'>

## Prototype

The team wanted to experiment in Unreal Engine 4 this week, because of where we saw the game going. Where as FloridaMan had the potential for a modular asset setup where designers could mix and match environment pieces, Unity felt likea  better fit. In Casino Chaos, the world is heavily designed to give the best experience and there is a lot more artistic requirements for animations and shaders. Our artist is more familiar with Unreal Engine 4, and much of Unreal Engine 4 is already setup to cater to third-person shooter-esk games.

That said, the transition from Unity to Unreal has been a time and a half! Take a look at the comparison!

<video style="width:50%; float: left; padding: 5pt;" controls>
	<source src="/posts/2018-09-12-ouroboros-prototypes/chaos_coven.mp4" type="video/mp4"/>
</video>

<video style="width:50%; float: right; padding: 5pt;" controls>
	<source src="/posts/2018-09-12-ouroboros-prototypes/chaos_coven.mp4" type="video/mp4"/>
</video>

Unreal looks so much better, right?! It's definitely <i>not</i> because Unreal Engine 4 is already setup to support third-person games. Not at all.

We took this game to QA twice this week. The first session we got a lot of feedback about some tweaks to improve environment readability and minor tweaks to make things work better. Our second QA, which is where the video on the right came from, got lots of much needed feedback. This feedback told us that our game idea was really fun and engaged players in the co-op competitive gameplay. You may also note that the difference in the two prototypes is that the one in Unity (left) is networked, while the one in Unreal (right) is not. This was because we wanted to not only test local multiplayer style of gameplay, but also because we wanted to prototype rapidly, and experiementing in Unreal Engine networking did not fit that goal.

# Tools

## App/QA-Recorder

The team has been experimenting with a new playtesting tool that I've been working on. Its current name is the QARecorder. It's job is to record using the [Open Broadcast Software Studio](https://obsproject.com/), and launch a game executable for you so that playtesting sessions are automatically recorded. This helps the devleopers by giving them the player's POV, and will assist with tracking down bugs. It is also valuable for saving gameplay footage when reviewing how far the game has come (not to mention blogposts like these). It has the added bonus of, if bug reports are integrated into the engine, allowing developers to see bugs bookmarked in the footage during review. Hopefully I'll post more on this once we get further into development.

## Games User Research: Timelines

Tangentially related to Capstone is my independent study in Games User Research. I'll do more in-depth blog post on this in the near future, but what is really exciting is that I have begun full tool development to assist with getting player experience feedback from playtesting sessions. Development is only beginning, but the dawn of a new age for Ouroboros Creations is upon us. This goal of this tool is to record gameplay data from built executables (like where players are, what are they doing, etc). This data would then be used to load into the engine editor, where developers can see things like heatmaps in-engine from gameplay sessions. The other part of this tool is the goal of creating timelines. These timelines will take the data collected (example: for the purpose of creating a heatmap), and developers will be able to view this data being constructed over time. Timelines will be important as they allow developers to see the dimension of time in their data. More on this to come, but be prepared for exciting things!

# Weekly Team Posts

Producer: Cody Douglas | []()

Artist: Ellie Peak | []()

Designer: Conor Tully | []()
