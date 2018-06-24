---
title: "Cretins"
order: 7
date: 2017-05-23
excerpt: ""

header:
  image: 
  teaser: 

layout: home
language: "C#"
year: "2017"
portfolio: "true"

sidebar:
  - title: "Description"
    text: "A technical demontration of a theoretical multiplayer networked Pokemon game."
  - title: "Timeframe"
    text: "October-December 2017 (9 weeks)"
  - title: "Team"
    text: "Jake Ruth. Chris Brennan."
  - title: "Contribution"
    text: "Programmer"
  - title: "Outcomes"
    text: "Small team. Networked demo. Async and synchronus networking. Unity tilemaps."
---

<!--![screenshot_1]({{ site.url }}{{ site.baseurl }}/assets/projects/dreamtime/images/screenshot_1.png){: .align-center}-->

Cretins is a technical demonstration based on the classic game Pokemon. It was the team's first full demonstration focusing on networked gameplay. Throughout this project, the team worked on integrating both asynchronous and synchronus style multiplayer gameplay. We decided taht Pokemon, if multiplayer, exemplified this. Therefore, we decided to write a technical demonstration from scratch. The overworld (the area the player is spawned in) is all asynchronous gameplay. Players make actions independent of one another and each player can see others moving. Upon approaching another player, a user can choose to challenge them to battle. This begins the synchronous gameplay. If the challenge is accepted by the challengee, both players enter the battle portion of the demo. This will cause their avatars in the overworld to stop moving and being able to be interacted with by other players. Those not in battle can still move around and play as normal. The two engaged in combat take turns making moves with their pokemon until one party has finished. Additionally, players can roam the world and encounter AI battles in tall grass, just as the classic Pokemon games have.

In order to fully understand the networking pipeline, we also developed a low-level alternative to Unity's HLAPI. We developed a plugin for the Unity engine which uses RakNet to send packets over a network, as well as calculate latency in a network. This plugin allowed us to get our hands dirty in networking code and give us complete control over how packets are handled.

All art assets are based on the games by Nintendo and this project is not meant for public consumption. Copyright on art assets belongs to the Pokemon games.

