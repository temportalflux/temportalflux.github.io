---
layout: post
title: "Minecraft: A Throw Back"
date: 2017-10-10
categories: Minecraft

header:
  teaser: /assets/posts/2017-10-10-minecraft-a-throw-back/origin.png

description: The beginnings of programming and game development.

---


Recently I have had the chance to take a break from school work, portfolio development, and resident assistant responsibilities to throw back and play a game I haven’t played in a while. That game... Minecraft.

<img src='/assets/posts/2017-10-10-minecraft-a-throw-back/origin.png' class='iconDetails' align="left" style="width:10%">
Most of my time at high school was during the years of Minecraft and LAN server play. Kids from elementary to senior year were playing with their friends on everything from personal desktops to MacBooks (this was before Minecraft: Pocket Edition became a thing). This was also how I got into the nitty gritty of games. I had done some iOS development prior, having attended two years of iDTech Camp, so I was familiar with some of the basics of programming. Minecraft, however, was my first exposure to active game development and usage.

For most who grew up being exposed to Minecraft, the pure vanilla mechanics got old quick, especially once you were exposed to the wonders and creativity that can exist with mods. Thankfully, Mojang’s EULA doesn’t exactly prohibit the creation of these innovations, so long as the developers don’t distribute Mojang’s code. With the advent of Minecraft Forge, modders were freer to develop without worrying too much about how their code would interfere with other developer’s code. So, this is where I took to, my first real experiences as a developer, using Java.

For the next couple months and years, my world away from personal life and school was dominated by an online presence. Most of my creations were basic, and as most first-time modders tend to lean to, they were mostly overpowered and lacking in originality. This, too, got old fast. Luckily, I had some background on 3D modelling thanks to Blender tutorials. So, I started delving into 3D entities and unique AI behaviors. As I progressed, my experiences and know how in Java became more well-rounded, though my self-taught methods were not without their faults. After learning about more complex behaviors and things I could work on, I would often spend hours trying to debug some edge case scenario, and this sometimes ended up not getting fixed. Thus, the downfalls of self-taught programming. Eventually, I learned better techniques, thanks to the wonders of Google, and found ways to better debug (thank goodness for Debugger tools).

I also event got to the point of being able to take on someone else’s code and make it better. One of the larger projects I took on was a rewrite of Weeping Angels for a newer Minecraft version after the old dev had left (I’m sure someone has done the same for me since I left). This involved taking their (beautifully) open-sourced project on GitHub, and looking through the source code to find out what was the most efficient, and what techniques did I want to carry over.
<img src='/assets/posts/2017-10-10-minecraft-a-throw-back/nek.png' class='iconDetails' align="right" style="width:10%">
The progress of this mod further sparked imagination for creations that followed. For a time, I worked on mods such as Plants Vs Zombies (a turret defense system adaptation for open-world usage), Compression (a way to compress blocks and items), Origin (a library for assisting me to setup mods quickly and efficiently), and NotEnoughKeys  (allowed users to expand what keybindings could be used by adding combinations of CONTROL, SHIFT, and ALT to the bindings).

<center>
<img src='/assets/posts/2017-10-10-minecraft-a-throw-back/compression.png' class='iconDetails' style="width:80%" >
</center>

Jump forward to a couple weeks ago, and I decided I had some time on my hands, and wanted to throw back to playing Minecraft for a bit. I knew I wouldn’t last long in vanilla (no-mods), so I pulled down the latest CurseForge launcher and pulled in some of the classics. Not long after starting a new world, I found part of my experience was lacking. Something was missing here. Then I realized that the hole in my experience was on mod that I used to work on, Compression. The ease of being able to compress blocks and items, and use the concepts of density to suck items towards me have since left. Like any good dev, I decided to throw-back even more, and update Compression to the latest MC Version. Within the week, I had a pretty basic update - now with better comments as well - and a more well-rounded playing experience. If the rewrite of my own mod has taught me anything, its that even when you are getting started writing and sort of code, ALWAYS heavily document what the heck it is you’re doing, because that all-to-often gets lost in translation after years – or even weeks – of writing it. That and never write full mods in obscure languages like Scala – which take a lot of different setup – but that’s a story for another time.

