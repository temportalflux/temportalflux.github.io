
If you have not yet read my recent blog post on the tools I've been
working on, please [go read that now](/posts/2018-10-04-ouroboros-tools)!
It will provide some very useful context for this blog post.

In recap, I am working on a tool for Unreal Engine 4 which records
player experience data and relays that data back to the developers
in-engine. This tool, I have dubbed YOGURT -
Your Own Games User Research Toolset. So,
[lets get down to business](https://www.youtube.com/watch?v=TVcLIfSC4OE),
and by business, I mean eating gOGURTs.

During a conversation with one of my professors recently, I realized
that there is one underlying philosophy behind the things I program -
and how I design them. Make it modular and easy to use.
Every time I sit down to make something cool, the intentionality is
how can I make life easier for my present or future co-developers. This
has lead to tools like the
[ones I made at Disruptor Beam](/posts/2018-08-16-disruptor-beam)
and the QARecorder, but is also the inspiration for the implementation
of things like the Gameplay Ability System for my
[capstone project](/blog/Capstone). Everything I've done so far for
capstone has been geared towards giving my designer as much control
in engine as I can. That leads to why YOGURT. Why am I spending time
on another course which has made senior life that much busier.
Well, a) I need the credit to fill in a programming elective, but
more importantly b) because I want our designers to be well informed
and make decisions based on the player's experience. Also, minorly
c) I'm a workaholic.

<div style="padding: 10pt; width: 30%; float: right;">
<img style="width: 100%;" src='${PATH_MARKDOWN}/whiteboard-1.jpg' />
<center>
Whiteboard outline #1
</center>
</div>

# Planning

In the past 2 weeks, I've gone from just printing out text messages to
the screen to having a demos for procedural mesh and heatmapping. My
first step was to figure out what my end goal was, and figure out
what each step towards that goal looked like. To do so, I stood in
front of a whiteboard for an hour or two. You can see the resulting
graph (image #1) adjacent to this paragraph.

The next step was re-organzing this overview so that I could list out
what each step would require. In the adjacent image (#2), there are a
couple of distinct areas.

#### Flow

The overarching steps to go from collecting data to representing it
in the editor. The steps are Recording, Loading, Building, Processing,
and Rendering.

<div style="padding: 10pt; width: 50%; float: right;">
<img style="width: 100%;" src='${PATH_MARKDOWN}/whiteboard-2.jpg' />
<center>
Whiteboard outline #2
</center>
</div>

Recording is cataloging data in the build, while Loading
is loading said data files in the editor. Building takes place when a
developer needs to generate/build the mesh that the heatmap will be
displayed on. Processing takes the loaded data and turns it into
something digestible (a heatmap in this case). Finally, Rendering takes
the generated 3D mesh and the heatmap texture, merges them, and shows
the result to the developer in the editor.

#### Known vs Unknown

The first two sections I already had nailed down. Recording and Loading
are already in my proof-of-concept for YOGURT. The rest was what I was
*really* planning.

### Realizations

During the planning process, I realized that while a completely
procedural system would be nice, it would actually be easier to wire
everything manually for now so I can get the proof of concept working.
I do only have about 6 weeks until the project is due!

# Next Steps

<div style="padding: 10pt; width: 40%; float: left;">
<img style="width: 100%;" src='${PATH_MARKDOWN}/heatmap_v1.gif' />
<center>
Heatmap V1
</center>
</div>

So here we area. I have 3 separately working systems. One is a *live*
heatmap, which shows off the heatmap while you are playing the game.

One is the procedural mesh system, which allows developers to define
the area in which the heatmap will be recorded and displayed. I found
out this week that Unreal Engine has a really nice whiteboxing level
editor, so that will be worth a look into once I have this really
rough mock up working.

The third system is the recording live data
and loading it into editor which is what I worked on a couple weeks ago.

So my next step? Time to merge all of these into one cohesive whole,
so that I can record raw data during runtime, load it, build the mesh,
process the heatmap data, and show it to developers in editor!

<iframe
    width="560" height="315"
    src="https://www.youtube.com/embed/KMXAgcEdnIo"
    frameborder="0" allow="encrypted-media"
    allowfullscreen></iframe>
