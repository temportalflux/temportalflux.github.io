
Your Own Games User Research Toolset (or YOGURT for short) is a tool developed for the purpose of
collecting player experience data, processing it, and visualizing said data in engine.
At its core, it's goal is to help game developers better understand the experiences their players have in their game.
YOGURT was built as an Unreal Engine 4 plugin to help game developers analyze player experience using telemetry
from their game. It can be used with single or multi-player frameworks, but works best when there is a 2D or
3D space where players exist.

As a vision, YOGURT would have support for any number of custom modules to gather data and visualize it in the editor.
This ranges from 2D or 3D heat-maps, event markers, storyboards, or any other kind of visualization that a developer
would find useful. As a prototype, however, the current state of YOGURT provides native support for 2 dimensional
heat-maps in 3-dimensional space. It also currently provides native support for binning collected data by
timestamp so it can be viewed in chunks instead of all together.

The development of YOGURT took place over the course of 15 weeks, and I occasionally blogged about it under the tag
[YOGURT](/blog/YOGURT).

By the end of these 15 weeks, I had created a first prototype/mockup of the tool in UE4, and had written a
[conference paper](${PATH_MARKDOWN}/YOGURT.pdf) talking about the technology and how to set it up.
The entire project is also listed under my Github as an
[open source project labelled YOGURT](https://github.com/temportalflux/YOGURT/tree/develop),
as is the [repository for the paper itself](https://github.com/temportalflux/YOGURT-docs).

<center>
<div style="padding: 10pt; width: 100%;">
<img
    style="width: 100%;"
    src='${PATH_MARKDOWN}/images/live-heatmap.gif'
/>
A really early version of the prototype, in which the purpose was to demonstrate that
heatmaps were a valid goal to pursue for the tool.
</div>
</center>

<br/>

<center>
<div style="padding: 10pt; width: 100%;">
This is the aforementioned paper, embedded here for your convenience.
<object data="${PATH_MARKDOWN}/YOGURT.pdf" type="application/pdf" width="100%" height="500em">
  <p>Could no show PDF, please go and download the file <a href="${PATH_MARKDOWN}/YOGURT.pdf">!</a></p>
</object>
</div>
</center>
