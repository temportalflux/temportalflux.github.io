---
layout: post
title: "Skyrates: A Beginning"
date: 2018-01-31
language: "C#"
year: "2018"
categories: Unity, Skyrates, Production, Prototyping

description: "Milestone 1A: Starting our sky-high adventure"
header:
  teaser: /assets/posts/2018-01-31-skyrates-a-beginning/logo.png 

---

During the spring semester at Champlain College, Game Studio Juniors take a course in Game Production. This is the second of its kind, the first being Production I, this being Production II. In this course, all four disciplines (Production, Art, Design, and Engineer) form teams and create games from the ground up. In the context of Production II, this includes rapid prototyping and weekly formal pitches of our game to our studio head (professor). My team, consisting of a designer, two artists, and myself (an engineer) pitched two concepts and a physical and digital prototype. At the end of our presentation, the team decided, and our studio head agreed (along with the rest of our class) that we should pursue a concept we have dubbed Skyrates.

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/header.png' class='iconDetails'>

Not to be confused with the <a href="http://skyrates.net/">2006 MMO by Airship Studios</a>, Skyrates is a mixture of single and multiplayer which places the player in a 3D world flying a steampunk airship beyond the clouds. Not convinced yet? What if I told you that your main goal is to Shoot, Loot, and Evade opponents in a potentially open-world with procedurally generated enemies, skylands, and dungeons. Its a great concept - and easily extensible for future development - but also very scope heavy.

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/Evade.gif' class='iconDetails' style="width:40%;" align="right">

For the scope of your prototype, we decided to focus on core gameplay elements. This means, shooting enemies (which requires enemies to be present in the world), looting vessels of value, and evading enemies which are too powerful for you. So I drafted a preliminary prototype to show just that. In the above and following gifs, you will see examples of 3rd person movement (in a ship), shooting down other vessels, and being able to pick up their loot.

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/Shoot.gif' class='iconDetails' style="width:40%;" align="right">

Each of these systems will need to be updated in turn, but for the scope of our first prototype, they were sufficient. This was a critical stage in development, as being able to crank out a very quick and dirty presentation in a limited amount of time, which still presented nice, was critical to convincing the studio head that the project is worthwhile. I was very limited on time (since I had committed to the <a href="/posts/2018/01/31/skyrates-a-beginning">Global Game Jam</a>), and thus I scoped the prototype to only the basics.

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/Loot.gif' class='iconDetails' style="width:40%;" align="right">

The day following the presentation, the team got together to look at our mechanics. We had a list of gameplay features, systems, and ideas in a document, but now we needed to prioritize what to work on for this scrum sprint.

<br/>
<br/>

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/mechanics.gif' class='iconDetails' style="width:50%;padding-right: 1%;" align="left">

So we took to it. We prioritized by looking at what systems affected other features. Things like multiplayer support affect the entire structure of the game, and thus are super critical to start as soon as possible. Getting started on customizing ships (at least aestetically) was something the artists felt was also critical, and so the systems to support that also need to be in ASAP. And in turn with iterative development, all the features currently in need to be looked at and improved upon if necessary. So updating ship movement with a 3rd person perspective, updating shooting to work well with customizable ships, and making sure loot tables are there for designer usage all need to be priorites as well.

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/priorities.jpg' class='iconDetails' style="width:50%;" align="right">

So that's my task this week. Draft up some new systems, and create tools for the designer to be able to use these effectively, as well as do some research and get the infastructure for multiplayer development in. I've got some, what I believe, to be really neat ideas, but those are for another post. In the mean time, enjoy this amazing artwork our artists have created. The project is on a private campus server, but I'll be posting source fragments as applicable.

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/pirate.png' class='iconDetails' align="left">

<img src='/assets/posts/2018-01-31-skyrates-a-beginning/logo.png' class='iconDetails'>

